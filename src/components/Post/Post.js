import React from "react";

const Post = ({ title, url }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <a href={url} target="blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default Post;
