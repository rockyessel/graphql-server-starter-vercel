import { ApolloError } from 'apollo-server-express';
import {
  getUserPostsByUsername,
  posts,
} from '../../services/dummy-data/posts.js';
import { IContext, IDummyArgs, IPost } from '../../types/index.js';
import { getUserById } from '../../services/dummy-data/user.js';

export const DummyPost = {
  Query: {
    posts: async (_: null, args: IDummyArgs, _context: IContext) => {
      try {
        if (!args.userId) return null;

        const { skip = 0, limit = 30, userId } = args;

        const userPosts = await posts(userId, skip, limit);

        if (!userPosts || userPosts.posts.length === 0) {
          throw new ApolloError('No posts found', 'NO_POSTS_FOUND');
        }

        return {
          posts: userPosts.posts,
          total: userPosts.total,
          skip: userPosts.skip,
          limit: userPosts.limit,
        };
      } catch (error) {
        console.error('Error fetching posts:', error);

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

    authorize_posts: async (_: null, _args: IDummyArgs, context: IContext) => {
      try {
        const graphqlURL = context.req.originalUrl;

        const pathArr = graphqlURL.split('/');

        // Ensure the URL is in the expected format
        if (pathArr.length < 3 || pathArr.length > 4) {
          throw new Error('Invalid URL format. Expected: /{username}/graphql');
        }

        const username = pathArr[1];

        if (!username || typeof username !== 'string') {
          throw new Error('Invalid username: Missing or malformed username');
        }

        const data = await getUserPostsByUsername(username);

        if (!data) {
          console.warn(`No posts found for username: ${username}`);
          return null;
        }

        return data;
      } catch (error) {
        throw new ApolloError(
          'Internal Server Error',
          'INTERNAL_SERVER_ERROR',
          { originalError: error }
        );
      }
    },
  },
  Post: {
    user: async (parent: IPost) => {
      try {
        const user = await getUserById(parent.userId);

        if (!user) {
          throw new Error(`User with ID ${parent.userId} not found.`);
        }
        return user;
      } catch (error) {
        // Log and rethrow the error for debugging or API consumption
        console.error(`Error fetching user with ID ${parent?.id}:`, error);
        throw new ApolloError(
          'An unexpected error occurred while fetching the user.',
          'INTERNAL_SERVER_ERROR',
          { originalError: error }
        );
      }
    },
  },
};
