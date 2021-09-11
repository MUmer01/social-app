import React from "react";

const PostsContext = React.createContext({
  isLoading: false,
  posts: [],
  createPost: () => {},
  handleGetAllPosts: () => {},
});

export { PostsContext };
