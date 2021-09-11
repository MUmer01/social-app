/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Input from '../../components/input';
import InputImage from '../../components/inputImage';
import Button from '../../components/button';
import { usePostsContext } from '../../hooks/posts';

const Home = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState(null);
  const { createPost, posts, handleGetAllPosts, isLoading } = usePostsContext();

  React.useEffect(() => {
    handleGetAllPosts();
  }, []);

  React.useEffect(() => {
    console.log({ image });
  }, [image]);

  return (
    <div>
      <div>
        <Input
          title="Post Title"
          onChange={v => {
            setTitle(v);
          }}
          value={title}
        />
        <Input
          title="Post Description"
          onChange={v => {
            setDescription(v);
          }}
          value={description}
        />
        <InputImage
          title="Select Image"
          value={image}
          onChange={files => {
            if (files?.length) {
              setImage(files[0]);
            } else {
              setImage(null);
            }
          }}
        />
        <Button
          disabled={!image || !description || !title || isLoading}
          title="Login"
          variant="p"
          onClick={() => {
            createPost({ image, description, title });
            setTitle('');
            setDescription('');
            setImage(null);
          }}
        />
      </div>
      <div>
        {posts.map(post => {
          return (
            <div key={post.id}>
              <h1>{post.username}</h1>
              <p>{post.title}</p>
              <img src={post.image} alt="" />
              <p>{post.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
