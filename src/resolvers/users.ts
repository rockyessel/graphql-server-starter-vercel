import axios from 'axios';
import { BASE_URL_ENDPOINT } from '../libs/constants';
import { IArticle, IBlog, IContext, IUser, IUserArgs } from '../types/index.js';

export const Users = {
  Query: {
    users: async (_: IUser, __: IUserArgs, context: IContext) => {
      try {
        const {} = context;

        const response = await axios.get(`${BASE_URL_ENDPOINT}/api/v1/users`);
        const { data } = response;
        return data.payload;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    user: async (_: IUser, args: IUserArgs, context: IContext) => {
      try {
        const {} = context;
        const { address } = args;
        const endpoint = `${BASE_URL_ENDPOINT}/api/v1/users/${address}`;

        const response = await axios.get(endpoint);
        const { data } = response;
        return data.payload;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

    balance: async (_: IUser, args: IUserArgs, context: IContext) => {
      try {
        const {} = context;
        const { address } = args;
        const endpoint = `${BASE_URL_ENDPOINT}/api/v1/users/balance/${address}`;

        const response = await axios.get(endpoint);
        const { data } = response;
        // console.log('data: ', data);
        return {
          ...data.payload,
        };
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },

  User: {
    blogs: async (parent: IUser, _: IUserArgs, context: IContext) => {
      const {} = context;
      const { address } = parent;
      const endpoint = `${BASE_URL_ENDPOINT}/api/v1/blogs/users/${address}`;

      const response = await axios.get(endpoint);
      const { data } = response;
      const blogs: IBlog[] = data.payload;
      return blogs;
    },

    articles: async (parent: IUser, _: IUserArgs, context: IContext) => {
      const {} = context;
      const { address } = parent;
      const endpoint = `${BASE_URL_ENDPOINT}/api/v1/articles/users/${address}`;

      const response = await axios.get(endpoint);
      const { data } = response;
      console.log('data: ', data);
      const blogs: IArticle[] = data.payload;
      return blogs;
    },
  },
};
