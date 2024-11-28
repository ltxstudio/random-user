import React from "react";

const LoadMoreButton = ({ onClick, loading }) => (
  <div className="text-center my-4">
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded shadow ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? "Loading..." : "Load More Users"}
    </button>
  </div>
);

export default LoadMoreButton;
