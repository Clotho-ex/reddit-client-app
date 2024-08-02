import React from "react";
import Subreddit from "../Subreddit/Subreddit";
import "./SubredditList.css";

const SubredditList = ({ subreddits }) => {
  return (
    <div className="subreddit-list">
      {subreddits.map((subreddit) => (
        <Subreddit
          key={subreddit.id}
          name={subreddit.name}
          url={`https://www.reddit.com/r/${subreddit.name}/`}
        />
      ))}
    </div>
  );
};

export default SubredditList;
