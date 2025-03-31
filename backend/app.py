import time
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY') # You can hardcode your OpenAI API key here for testing, but it's recommended to use environment variables for security reasons.
ASSISTANT_ID = os.getenv('ASSISTANT_ID') # You can hardcode your Assistant ID here for testing, but it's recommended to use environment variables for security reasons.

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

# Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.json
    user_message = data.get("message", "")

    # Handle empty messages
    if not user_message:
        return jsonify({"response": "Please provide a message."}), 400

    try:
        # Create a thread with the user's message
        thread = client.beta.threads.create(
            messages=[{"role": "user", "content": user_message}]
        )

        # Submit the thread to the assistant (as a new run)
        run = client.beta.threads.runs.create(thread_id=thread.id, assistant_id=ASSISTANT_ID)
        print(f"👉 Run Created: {run.id}")

        # Wait for the run to complete
        while run.status != "completed":
            run = client.beta.threads.runs.retrieve(thread_id=thread.id, run_id=run.id)
            print(f"🏃 Run Status: {run.status}")
            time.sleep(1)

        # Retrieve the latest message in the thread
        message_response = client.beta.threads.messages.list(thread_id=thread.id)
        messages = message_response.data
        latest_message = (
            messages[0].content[0].text.value if messages else "No response available"
        )

        return jsonify({"response": latest_message})

    except Exception as e:
        print("Error:", e)
        return jsonify({"response": "An error occurred while processing your request."}), 500

if __name__ == '__main__':
    app.run(debug=True)
