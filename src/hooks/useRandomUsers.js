import { useState, useEffect } from "react";
import { generateRandomUsers } from "../utils/userGenerator";

const useRandomUsers = (initialCount = 10) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = (count) => {
    setLoading(true);
    const newUsers = generateRandomUsers(count);
    setUsers((prev) => [...prev, ...newUsers]);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(initialCount);
  }, [initialCount]);

  return { users, loading, fetchUsers };
};

export default useRandomUsers;
