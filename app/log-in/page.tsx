"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', formData);
      if (response.data.token) {
        setSuccess('Login successful');
        // Store the token and redirect to the dashboard or home page
      } else {
        setError('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Login</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-lg text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded-lg" required />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-lg text-gray-700">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="border p-2 rounded-lg" required />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button type="submit" className="bg-black text-white p-2 rounded-lg w-full hover:bg-gray-800">Sign In</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
