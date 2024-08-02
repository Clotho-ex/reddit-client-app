import React from "react";
import "./SearchBar.css";
import { ReactComponent as RedditLogo } from "../../assets/reddit-1.svg";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <RedditLogo  className="reddit-logo"/>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Reddit" />
      </div>
    </div>
  );
};

export default SearchBar;
