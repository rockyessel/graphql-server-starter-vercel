import { ApolloError } from 'apollo-server-express';
import { users } from '../../services/dummy-data/user.js';
import { IDummyArgs } from '../../types/index.js';

export const DummyUser = {
  Query: {
    users: async (_: null, { skip = 0, limit = 30 }: IDummyArgs) => {
      try {
        const userList = await users(skip, limit);

        if (!userList || userList.users.length === 0) {
          throw new ApolloError('No users found', 'NO_USERS_FOUND');
        }

        return {
          users: userList.users,
          total: userList.total,
          skip: userList.skip,
          limit: userList.limit,
        };
      } catch (error) {
        console.error('Error fetching users:', error);

        if (error instanceof ApolloError) {
          throw error;
        }

        throw new ApolloError(
          'Internal Server Error',
          'INTERNAL_SERVER_ERROR',
          { originalError: error }
        );
      }
    },
  },
};
