import Axios from 'axios';

// https://social-media-uit.herokuapp.com/posts -> Method: post -> for creating post
// title
// description
// image

// https://social-media-uit.herokuapp.com/posts -> Method: get -> to fetch the posts

// https://social-media-uit.herokuapp.com/like -> Method: post
// postId

const usePostsCounteiner = () => {
  const create = async ({ title, description, image }, token) => {
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
      formData.append('description', description);

      const res = await Axios({
        method: 'post',
        url: 'https://social-media-uit.herokuapp.com/posts',
        data: formData,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (
        res?.status === 200 &&
        res?.data?.message === 'Post created successfully'
      ) {
        return {
          isSuccess: true,
          data: {
            post: res.data.post,
            message: res.data.message,
          },
        };
      }
      throw new Error('');
    } catch (error) {
      console.log({ error });
      return {
        isSuccess: false,
        message: error?.data?.message || 'Failed',
      };
    }
  };

  const getPosts = async token => {
    try {
      const res = await Axios({
        method: 'get',
        url: 'https://social-media-uit.herokuapp.com/posts',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res?.status === 200 && res?.data?.posts) {
        return {
          isSuccess: true,
          data: {
            posts: res.data.posts,
          },
        };
      }
      throw new Error('');
    } catch (error) {
      console.log({ error });
      return {
        isSuccess: false,
        message: error?.data?.message || 'Failed',
      };
    }
  };

  return {
    create,
    getPosts,
  };
};

export default usePostsCounteiner;
