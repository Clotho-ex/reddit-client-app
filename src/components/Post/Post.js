import React from "react";
import "./Post.css";

const Post = ({ title, text, url }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{text}</p>
      <a href={url} target="blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default Post;
