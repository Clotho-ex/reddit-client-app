import React from "react";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <p>reddit</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Reddit" />
      </div>
    </div>
  );
};

export default SearchBar;
