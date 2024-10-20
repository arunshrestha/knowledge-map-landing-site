import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Import routes

function App() {
  return (
    <Router basename="/knowledge-map-landing-site">
      <AppRoutes />
    </Router>
  )
}

export default App;
