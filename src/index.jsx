import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18

import App from './App';

// Create a root container
const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot instead of render

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
