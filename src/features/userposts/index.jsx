import React from 'react';
import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const { userName } = useParams();
  console.log({ userName });
  return <div>New Route</div>;
};

export default UserPosts;
