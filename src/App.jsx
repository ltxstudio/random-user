import React, { useState } from "react";
import { FaRedoAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import faker from "faker";
import Switch from "react-switch";

function App() {
  const [user, setUser] = useState(generateRandomUser());
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Function to generate random user data
  function generateRandomUser() {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      picture: faker.image.avatar(),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.zipCode()}`,
      birthday: faker.date.past(30).toLocaleDateString(),
      creditCard: {
        number: faker.finance.creditCardNumber(),
        type: faker.finance.creditCardType(),
        expiration: faker.finance.creditCardExpiry(),
        cvv: faker.finance.creditCardCVV(),
      },
      location: `${faker.address.city()}, ${faker.address.country()}`,
    };
  }

  const handleGenerateNewUser = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(generateRandomUser());
      setLoading(false);
    }, 500); // Simulate loading time for better UX
  };

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white"}>
      <div className="container mx-auto p-6 flex justify-center items-center flex-col">
        <motion.div
          className="max-w-sm w-full bg-white p-6 rounded-lg shadow-xl flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={user.picture}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover"
            animate={{ rotate: loading ? 360 : 0 }}
            transition={{ duration: 2, loop: Infinity, ease: "linear" }}
          />

          <motion.h2
            className="text-xl font-semibold text-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {user.name}
          </motion.h2>

          <p className="text-gray-600 text-sm">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.phone}</p>
          <p className="text-gray-600 text-sm">{user.location}</p>
          <p className="text-gray-600 text-sm">Birthday: {user.birthday}</p>
          <p className="text-gray-600 text-sm">Address: {user.address}</p>

          <div className="bg-gray-200 p-4 rounded-lg w-full">
            <h3 className="font-bold text-gray-800">Credit Card Info:</h3>
            <p className="text-gray-600">Number: {user.creditCard.number}</p>
            <p className="text-gray-600">Type: {user.creditCard.type}</p>
            <p className="text-gray-600">Expiration: {user.creditCard.expiration}</p>
            <p className="text-gray-600">CVV: {user.creditCard.cvv}</p>
          </div>

          <button
            className="mt-4 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 transition-all"
            onClick={handleGenerateNewUser}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate New User"}
          </button>

          <motion.div
            className="absolute top-4 right-4"
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <FaRedoAlt size={24} />
          </motion.div>

          <div className="mt-6">
            <span className="text-gray-500">Toggle Dark Mode</span>
            <Switch
              onChange={() => setDarkMode(!darkMode)}
              checked={darkMode}
              offColor="#ccc"
              onColor="#4caf50"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
