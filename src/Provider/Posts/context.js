import React from 'react';

const PostsContext = React.createContext({
  isLoading: false,
  posts: [],
  createPost: async () => {},
  handleGetAllPosts: async () => {},
});

export { PostsContext };
