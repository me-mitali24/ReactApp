import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Requesting password reset for:', { email });
    // Add your password reset logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border rounded w-full py-2 px-3" 
          />
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
