'use client'; // This directive makes this file a client component

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState<{ profileType: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get('/api/user/profile-type');
        setProfileData(res.data);
        setLoading(false);
      } catch (err: any) {
        if (err.response && err.response.status === 404) {
          setError('User profile not found.');
        } else {
          setError('An error occurred while fetching profile data.');
        }
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        {profileData ? (
          <p>Profile Type: {profileData.profileType}</p>
        ) : (
          <p>No profile data available.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
