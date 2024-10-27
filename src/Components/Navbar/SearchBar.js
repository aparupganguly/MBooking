import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
