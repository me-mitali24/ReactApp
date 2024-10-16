import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-green-200"> {/* Light Mint for Dashboard */}
      <aside className="bg-white w-64 shadow-md">
        <div className="p-4 text-xl font-bold">My Grocery Dashboard</div>
        <nav>
          <ul>
            <li className="p-4 hover:bg-gray-100">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">User Profile</div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Sales Overview</h2>
            <p className="mt-2">This week: $500</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Products in Stock</h2>
            <p className="mt-2">200 items</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">New Customers</h2>
            <p className="mt-2">15 signups</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
