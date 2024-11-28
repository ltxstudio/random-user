import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCreditCard, FaTwitter, FaLinkedin, FaGithub, FaGraduationCap, FaDog, FaCat, FaLanguage } from "react-icons/fa";

const UserCard = ({ user }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5 mx-auto space-y-4"
    whileHover={{ scale: 1.05 }}
  >
    <img
      src={user.avatar}
      alt={user.name}
      className="rounded-full w-32 h-32 mb-4 border-4 border-blue-500"
    />
    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
    <p className="text-sm text-gray-500">{user.jobTitle}</p>
    <p className="text-sm text-gray-600 mb-2">{user.email}</p>

    <div className="text-sm text-gray-700 flex flex-col gap-2">
      <p className="flex items-center gap-2">
        <FaPhone /> {user.phone}
      </p>
      <p className="flex items-center gap-2">
        <FaMapMarkerAlt /> {user.address}
      </p>
      <p className="flex items-center gap-2">
        <FaCreditCard /> {user.creditCard}
      </p>
      <p className="flex items-center gap-2">
        <FaEnvelope /> {user.socialMedia.email || "No Email Provided"}
      </p>
    </div>

    <div className="flex gap-4 mt-4 text-gray-600">
      {user.socialMedia.twitter && (
        <a href={user.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
      )}
      {user.socialMedia.linkedin && (
        <a href={user.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} />
        </a>
      )}
      {user.socialMedia.github && (
        <a href={user.socialMedia.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
      )}
    </div>

    <div className="mt-4 text-gray-700">
      <p className="flex items-center gap-2">
        <FaGraduationCap /> {user.education}
      </p>
      <p className="flex items-center gap-2">
        <FaLanguage /> {user.languages.join(", ")}
      </p>
      <p className="text-sm text-gray-600">Salary Range: {user.salaryRange}</p>

      {user.pets.length > 0 && (
        <div className="mt-4">
          <h3 className="text-gray-700 font-semibold">Pets</h3>
          <div className="flex gap-4 mt-2">
            {user.pets.map((pet, index) => (
              <div key={index} className="flex items-center gap-2">
                {pet.type === "Dog" ? <FaDog size={24} /> : <FaCat size={24} />}
                <span>{pet.name} ({pet.age} years old)</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {user.emergencyContact && (
        <div className="mt-4">
          <h3 className="text-gray-700 font-semibold">Emergency Contact</h3>
          <p>{user.emergencyContact.name} ({user.emergencyContact.relationship})</p>
          <p>{user.emergencyContact.phone}</p>
        </div>
      )}
    </div>
  </motion.div>
);

export default UserCard;
