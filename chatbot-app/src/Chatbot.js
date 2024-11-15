import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css'; // Optional: Add styling in Chatbot.css
import logo from './GoSprout_logo.jpg'; // Adjust the path to your logo image

const Chatbot = () => {
    const [messages, setMessages] = useState([]); // Stores conversation history
    const [userMessage, setUserMessage] = useState(''); // Current user input
    const [isVisible, setIsVisible] = useState(true); // Controls chatbot visibility

    const handleSendMessage = async () => {
        if (userMessage.trim() === '') return;

        // Add the user's message to the chat
        const newMessages = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);
        setUserMessage('');

        try {
            // Send the message to the backend
            const response = await axios.post('http://127.0.0.1:5000/chatbot', {
                message: userMessage,
            });

            // Add the assistant's response to the chat
            setMessages([...newMessages, { role: 'assistant', content: response.data.response }]);
        } catch (error) {
            console.error('Error connecting to the chatbot:', error);
            setMessages([...newMessages, { role: 'assistant', content: 'Error connecting to chatbot' }]);
        }
    };

    const handleRefreshChat = () => {
        setMessages([]);
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="chatbot-container">
            <button onClick={toggleVisibility} className='hide-bot'>
                {isVisible ? 'Hide Chatbot' : 'Show Chatbot'}
            </button>
            {isVisible && (
                <>
                    <img src={logo} alt="Logo" className="chatbot-logo" /> {/* Add the logo here */}
                    <div className="chat-window">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.role}`}>
                                <span>{msg.content}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button onClick={handleSendMessage}>Send</button>
                        <button onClick={handleRefreshChat}>Refresh</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Chatbot;
