import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUser,
  FaIdCard,
  FaGlobe,
  FaCopy,
  FaCheck,
} from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const RandomUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null); // State to track copied item

  const fetchRandomUser = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUser(data.results[0]);
      setCopied(null); // Reset copied state when fetching new user
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const handleCopy = (field) => {
    setCopied(field);
    setTimeout(() => setCopied(null), 2000); // Reset copy state after 2 seconds
  };

  if (loading)
    return <p className="text-center text-xl mt-10 animate-pulse">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 mt-10">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center mt-10">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <img
            src={user.picture.large}
            alt={`${user.name.first}'s avatar`}
            className="rounded-full w-32 h-32 border-4 border-blue-500 shadow-lg"
          />
          <h3 className="text-2xl font-semibold mt-4 text-blue-700">
            {user.name.title} {user.name.first} {user.name.last}
          </h3>
          <p className="text-gray-600 text-sm">{user.gender.toUpperCase()}</p>
        </div>

        <div className="mt-6 space-y-4">
          {[
            { label: 'Email', value: user.email, icon: <FaEnvelope className="text-blue-500 mr-3" /> },
            { label: 'Phone', value: user.phone, icon: <FaPhone className="text-green-500 mr-3" /> },
            {
              label: 'Location',
              value: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} (${user.location.postcode})`,
              icon: <FaMapMarkerAlt className="text-red-500 mr-3" />,
            },
            {
              label: 'DOB',
              value: `${new Date(user.dob.date).toLocaleDateString()} (${user.dob.age} years old)`,
              icon: <FaBirthdayCake className="text-yellow-500 mr-3" />,
            },
            { label: 'Nationality', value: user.nat, icon: <FaGlobe className="text-purple-500 mr-3" /> },
            { label: 'Username', value: user.login.username, icon: <FaUser className="text-cyan-500 mr-3" /> },
            {
              label: 'ID',
              value: `${user.id.name || 'N/A'}: ${user.id.value || 'N/A'}`,
              icon: <FaIdCard className="text-gray-500 mr-3" />,
            },
          ].map((detail, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                {detail.icon}
                <p className="text-gray-800">{detail.value}</p>
              </div>
              <CopyToClipboard text={detail.value} onCopy={() => handleCopy(detail.label)}>
                <button
                  className={`flex items-center text-sm px-3 py-1 rounded ${
                    copied === detail.label ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  } transition-all`}
                >
                  {copied === detail.label ? <FaCheck className="mr-2" /> : <FaCopy className="mr-2" />}
                  {copied === detail.label ? 'Copied' : 'Copy'}
                </button>
              </CopyToClipboard>
            </div>
          ))}
        </div>

        <button
          onClick={fetchRandomUser}
          className="mt-6 w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
        >
          Get Another User
        </button>
      </motion.div>
    </div>
  );
};

export default RandomUser;
