import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-orange-200"> {/* Background color for the welcome page */}
      <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Login</Link>
        <Link to="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</Link>
      </div>
    </div>
  );
}

export default App;

