import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard } from "react-icons/fa";

const UserCard = ({ user }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={user.avatar}
      alt={user.name}
      className="rounded-full w-24 h-24 mb-4 border-2 border-blue-500"
    />
    <h2 className="text-lg font-semibold">{user.name}</h2>
    <p className="text-sm text-gray-500 mb-2">{user.email}</p>
    <div className="text-sm text-gray-600 flex flex-col gap-2">
      <p className="flex items-center gap-2">
        <FaPhone /> {user.phone}
      </p>
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt /> {user.address}
      </p>
      <p className="flex items-center gap-2">
        <FaCreditCard /> {user.creditCard}
      </p>
    </div>
  </motion.div>
);

export default UserCard;
