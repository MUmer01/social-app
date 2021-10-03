import React from 'react';
import Input from '../components/input';
import InputImage from '../components/inputImage';
import Button from '../components/button';
import { usePostsContext } from '../hooks/posts';

const CreatePost = () => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState(null);
  const { createPost, posts, handleGetAllPosts, isLoading } = usePostsContext();

  return (
    <div>
      <Input
        title="Post Title"
        onChange={value => {
          setTitle(value);
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
        title="Create Post"
        variant="p"
        onClick={() => {
          createPost({ image, description, title });
          setTitle('');
          setDescription('');
          setImage(null);
        }}
      />
    </div>
  );
};

export { CreatePost };
