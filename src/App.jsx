import React, { useState } from "react";
import useRandomUsers from "./hooks/useRandomUsers";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import LoadMoreButton from "./components/LoadMoreButton";

const App = () => {
  const { users, loading, fetchUsers } = useRandomUsers(12);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-4 flex-grow">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <LoadMoreButton
          onClick={() => fetchUsers(6)}
          loading={loading}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
