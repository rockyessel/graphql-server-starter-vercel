import axios from 'axios';
import { BASE_URL_ENDPOINT } from '../libs/constants/index.js';
import { IArticle, ArticleArgs, IContext } from '../types/index.js';

export const Articles = {
  Query: {
    articles: async (_: IArticle, args: ArticleArgs, _context: IContext) => {
      // const { req } = context;
      // const token = req.headers;
      // console.log('token: ', token);
      const { where } = args;
      const queryParams = new URLSearchParams();

      if (where) {
        Object.keys(where).forEach((key) => {
          // @ts-ignore
          const value = where[key as any];
          if (value !== undefined) {
            queryParams.append(key, value.toString());
          }
        });
      }

      const response = await axios.get(
        `${BASE_URL_ENDPOINT}/api/v1/articles/q/articles?${queryParams.toString()}`
      );
      const { data } = response;
      return data.payload;
    },

    article: async (_: any, args: ArticleArgs, _context: IContext) => {
      // const { req } = context;
      // const token = req.headers;
      // console.log('token: ', token);
      const { id } = args;

      const response = await axios.get(
        `${BASE_URL_ENDPOINT}/api/v1/articles/${id}`
      );
      const { data } = response;
      return data.payload;
    },
    articleSlug: async (_: any, args: { slug: string }, _context: IContext) => {
      // const { req } = context;
      // const token = req.headers;
      // console.log('token: ', token);
      const { slug } = args;

      const response = await axios.get(
        `${BASE_URL_ENDPOINT}/api/v1/articles/slug/${slug}`
      );
      const { data } = response;
      return data.payload;
    },
  },

  Article: {
    blog: async (parent: any, _: ArticleArgs, _context: IContext) => {
      // const { req } = context;
      // const token = req.headers;
      // console.log('token: ', token);
      const { blogId } = parent;

      const response = await axios.get(
        `${BASE_URL_ENDPOINT}/api/v1/blogs/${blogId}`
      );
      const { data } = response;
      return data.payload;
    },
  },
};
