import React from 'react';
import Chatbot from './Chatbot';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
       <Navbar />
       <Routes>
         <Route path="/" element={<Page1 />} />
         <Route path="/apprenticeships" element={<Page2 />} />
         <Route path="/about" element={<Page3 />} />
       </Routes>
      </div>
      <Chatbot />
    </Router>
  );
}

export default App;

