import React from 'react';
import Chatbot from './Chatbot';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <div>
        <h1>Chatbot Interface</h1>
        <Chatbot />
      </div>
    </div>
  );
}

export default App;

