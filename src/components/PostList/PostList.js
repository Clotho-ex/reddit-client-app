import React from "react";
import Post from "../Post/Post";
import "./PostList.css";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          url={post.url}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default PostList;
