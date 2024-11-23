import { DUMMY_BASE_API } from '../../libs/constants/index.js';

export const users = async (skip = 0, limit = 30) => {
  try {
    const response = await fetch(
      `${DUMMY_BASE_API}/users?skip=${skip}&limit=${limit}`
    );
    if (!response.ok) {
      console.error(`Error: Failed to fetch users. Status: ${response.status}`);
      return { users: [], total: 0, skip, limit };
    }
    const data = await response.json();

    if (!Array.isArray(data.users)) {
      console.error('Error: Unexpected response format. Expected an array.');
      return { users: [], total: 0, skip, limit };
    }

    return {
      users: data.users,
      total: data.total,
      skip: data.skip,
      limit: data.limit,
    };
  } catch (error) {
    console.error(
      'Error: An unexpected error occurred while fetching users.',
      error
    );
    return { users: [], total: 0, skip, limit };
  }
};

export const getUserById = async (id: number) => {
  try {
    const response = await fetch(`${DUMMY_BASE_API}/users/${id}`);
    const user = await response.json();
    if (!response.ok) {
      console.error(`Error: Failed to fetch users. Status: ${response.status}`);
      return null;
    }
    return user;
  } catch (error) {
    console.log('error: ', error);
    return null;
  }
};
