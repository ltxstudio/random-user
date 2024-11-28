import React from "react";
import { FaUsers } from "react-icons/fa";

const Header = () => (
  <header className="bg-blue-600 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <FaUsers /> Random User Generator
      </h1>
    </div>
  </header>
);

export default Header;
