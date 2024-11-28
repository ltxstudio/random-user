import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="my-4">
    <input
      type="text"
      className="w-full p-2 border rounded-md shadow-sm"
      placeholder="Search users by name or email..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
