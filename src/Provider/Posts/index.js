import React from 'react';
import { useHistory } from 'react-router-dom';
import usePostsCounteiner from '../../containers/posts';
import { useAuthContext } from '../../hooks/auth';
import { PostsContext } from './context';

const PostsProvider = props => {
  const { create, getPosts } = usePostsCounteiner();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const history = useHistory();

  const createPost = async ({ title, description, image }) => {
    setIsLoading(true);
    const res = await create(
      {
        title,
        description,
        image,
      },
      token,
    );
    if (res.isSuccess) {
      setPosts(currentPosts => {
        const copy = [...currentPosts];
        copy.unshift(res.data.post);
        return copy;
      });
      alert(res.data.message);
    }
    setIsLoading(false);
  };

  const handleGetAllPosts = async () => {
    const res = await getPosts(token);
    if (res.isSuccess) {
      setPosts(res.data.posts);
    }
  };

  const providerValues = {
    isLoading,
    posts,
    createPost,
    handleGetAllPosts,
  };

  return (
    <PostsContext.Provider value={providerValues}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
