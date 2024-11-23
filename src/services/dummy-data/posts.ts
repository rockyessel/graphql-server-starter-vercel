import { DUMMY_BASE_API } from '../../libs/constants/index.js';

export const posts = async (userId: number, skip = 0, limit = 30) => {
  try {
    const response = await fetch(
      `${DUMMY_BASE_API}/posts/user/${userId}/?skip=${skip}&limit=${limit}`
    );

    if (!response.ok) {
      console.error(`Error: Failed to fetch posts. Status: ${response.status}`);
      return { posts: [], total: 0, skip, limit };
    }
    const data = await response.json();

    if (!Array.isArray(data.posts)) {
      console.error('Error: Unexpected response format. Expected an array.');
      return { posts: [], total: 0, skip, limit };
    }

    return {
      posts: data.posts,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    };
  } catch (error) {
    console.error(
      'Error: An unexpected error occurred while fetching posts.',
      error
    );
    return { posts: [], total: 0, skip, limit };
  }
};

export const getUserPostsByUsername = async (
  username: string,
  skip = 0,
  limit = 30
) => {
  try {
    //

    const userResponse = await fetch(
      `${DUMMY_BASE_API}/users/filter?key=username&value=${username}`
    );

    const foundUser = await userResponse.json();

    if (!foundUser || foundUser.total === 0) return null;

    const response = await fetch(
      `${DUMMY_BASE_API}/posts/user/${foundUser.users[0].id}/?skip=${skip}&limit=${limit}`
    );

    if (!response.ok) {
      console.error(`Error: Failed to fetch posts. Status: ${response.status}`);
      return { posts: [], total: 0, skip, limit };
    }
    const data = await response.json();

    if (!Array.isArray(data.posts)) {
      console.error('Error: Unexpected response format. Expected an array.');
      return { posts: [], total: 0, skip, limit };
    }

    return {
      posts: data.posts,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    };
  } catch (error) {
    console.error(
      'Error: An unexpected error occurred while fetching posts.',
      error
    );
    return { posts: [], total: 0, skip, limit };
  }
};
