"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const VolProfile: React.FC = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    story: '',
    skills: [],
    contactNumber: '',
    email: '',
    age: '',
    gender: '',
    designation: '',
    serviceType: '',
    address: '',
    pinCode: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/volunteers/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('/api/volunteers/profile', profileData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile data:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Volunteer Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded-lg" />
        <textarea name="story" value={profileData.story} onChange={handleChange} placeholder="Your story" className="border p-2 rounded-lg"></textarea>
        <input type="text" name="skills" value={profileData.skills.join(', ')} onChange={handleChange} placeholder="Skills (comma separated)" className="border p-2 rounded-lg" />
        <input type="text" name="contactNumber" value={profileData.contactNumber} onChange={handleChange} placeholder="Contact Number" className="border p-2 rounded-lg" />
        <input type="text" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded-lg" />
        <input type="number" name="age" value={profileData.age} onChange={handleChange} placeholder="Age" className="border p-2 rounded-lg" />
        <input type="text" name="gender" value={profileData.gender} onChange={handleChange} placeholder="Gender" className="border p-2 rounded-lg" />
        <input type="text" name="designation" value={profileData.designation} onChange={handleChange} placeholder="Designation" className="border p-2 rounded-lg" />
        <input type="text" name="serviceType" value={profileData.serviceType} onChange={handleChange} placeholder="Type of Service" className="border p-2 rounded-lg" />
        <input type="text" name="address" value={profileData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded-lg" />
        <input type="text" name="pinCode" value={profileData.pinCode} onChange={handleChange} placeholder="Pin Code" className="border p-2 rounded-lg" />
        <button type="submit" className="bg-black text-white p-2 rounded-lg hover:bg-gray-800">Update Profile</button>
      </form>
      {message && <p className="text-green-500 mt-4">{message}</p>}
    </div>
  );
};

export default VolProfile;
