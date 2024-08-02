import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import PostList from "./components/PostList/PostList";
import SubredditList from "./components/SubredditList/SubredditList";
import mockPosts from "./__mocks__/mockPosts";
import mockSubreddits from "./__mocks__/mockSubreddits";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <div className="main-content">
        <PostList posts={mockPosts} />
        <SubredditList subreddits={mockSubreddits} />
      </div>
    </div>
  );
}

export default App;
