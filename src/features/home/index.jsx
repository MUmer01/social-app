import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import { usePostsContext } from "../../hooks/posts";

const Home = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const { createPost, posts, handleGetAllPosts } = usePostsContext();

  React.useEffect(() => {
    handleGetAllPosts();
  }, []);

  React.useEffect(() => {
    console.log({ posts });
  }, [posts]);

  return (
    <div>
      <div>
        <Input
          title="Post Title"
          onChange={(v) => {
            setTitle(v);
          }}
          value={title}
        />
        <Input
          title="Post Description"
          onChange={(v) => {
            setDescription(v);
          }}
          value={description}
        />
        <Input
          title="Image URL"
          onChange={(v) => {
            setImage(v);
          }}
          value={image}
        />
        <Button
          disabled={!image || !description || !title}
          title="Login"
          variant="p"
          onClick={() => {
            console.log(image, description, title);
            createPost({ image, description, title });
          }}
        />
        {/* <input type="file" /> */}
      </div>
      <div>
        {posts.map((post) => {
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
