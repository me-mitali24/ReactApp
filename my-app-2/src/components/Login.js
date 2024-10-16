import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Logging in with:', { username, password });
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-200">
      <form className="transparent-bg p-6 rounded shadow-md w-80" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block mb-1">Email/Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
        <p className="mt-4 text-center">
          <a href="/signup" className="text-blue-500">Create an account</a>
        </p>
        <p className="mt-2 text-center">
          <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
