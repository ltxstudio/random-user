import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUser(data.results[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  if (loading) return <p className="text-center text-xl mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center mt-10">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-11/12 sm:w-1/2 md:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <img
            src={user.picture.large}
            alt={`${user.name.first}'s avatar`}
            className="rounded-full w-32 h-32 border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold mt-4">
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p className="text-gray-600 text-sm">{user.gender.toUpperCase()}</p>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500 mr-2" />
            <p>{user.email}</p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-green-500 mr-2" />
            <p>{user.phone}</p>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            <p>
              {user.location.city}, {user.location.state}, {user.location.country}
            </p>
          </div>
          <div className="flex items-center">
            <FaBirthdayCake className="text-yellow-500 mr-2" />
            <p>{new Date(user.dob.date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center">
            <span className="text-purple-500 font-semibold mr-2">Age:</span>
            <p>{user.dob.age} years</p>
          </div>
        </div>
        <button
          onClick={fetchRandomUser}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
        >
          Get Another User
        </button>
      </motion.div>
    </div>
  );
};

export default RandomUser;
