/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { usePostsContext } from '../../hooks/posts';
import { CreatePost } from '../../components/createPost';

const Home = () => {
  const { posts, handleGetAllPosts, handleLikePost } = usePostsContext();

  React.useEffect(() => {
    handleGetAllPosts();
  }, []);

  return (
    <Container>
      <CreatePost />
      <AllPostsContainer>
        {posts.map(post => {
          return (
            <PostContainer key={post.id}>
              <h4>{post.author}</h4>
              <p>{post.title}</p>
              <img src={post.image} alt="" width="150" />
              <p>{post.description}</p>
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={() => {
                  handleLikePost(post.id);
                }}
                style={{
                  color: post.isLiked ? 'red' : '#ccc',
                  cursor: 'pointer',
                }}
              />
            </PostContainer>
          );
        })}
      </AllPostsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AllPostsContainer = styled.div`
  margin-top: 20px;
`;

const PostContainer = styled.div`
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export default Home;
