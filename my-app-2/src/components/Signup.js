import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('Signing up with:', { username, email, password });
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light-yellow">
      <form className="transparent-bg p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button className="bg-blue-500 text-white w-full py-2 rounded">Sign Up</button>
        <p className="mt-4 text-center">
          <a href="/login" className="text-blue-500">Already have an account?</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
