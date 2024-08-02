import React from "react";

const Subreddit = ({ name, url }) => {
  return (
    <div className="subreddit">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="subreddit-link">
        {name}
      </a>
    </div>
  );
};

export default Subreddit;
