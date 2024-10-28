import axios from 'axios';
import { BASE_URL_ENDPOINT } from '../libs/constants';
import { IArticle, IBlog, IBlogArgs, IContext } from '../types';

export const Blogs = {
  Query: {
    blogs: async (_: any, args: { where?: IBlogArgs }, _context: IContext) => {
      try {
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
        console.log('queryParams: ', queryParams);

        const response = await axios.get(
          `${BASE_URL_ENDPOINT}/api/v1/blogs/w/query?${queryParams.toString()}`
        );
        const { data } = response;
        return data.payload;
      } catch (error) {
        console.log('query-blogs: ', error);
        return [];
      }
    },
    blog: async (_: IBlog, args: IBlogArgs, _context: IContext) => {
      try {
        // const { req } = context;
        const { id } = args;
        //
        // const token = req.headers;
        // console.log('token: ', token);

        const response = await axios.get(
          `${BASE_URL_ENDPOINT}/api/v1/blogs/${id}`
        );
        const { data } = response;
        return data.payload;
      } catch (error) {
        console.log('query-userBlogs: ', error);
        return null;
      }
    },
    subdomains: async (_: IBlog, __: IBlogArgs, _context: IContext) => {
      try {
        //      const { req } = context;
        // const token = req.headers;
        // console.log('token: ', token);
        const subdomainPaths = `${BASE_URL_ENDPOINT}/api/v1/blogs/subdomains/lists`;
        const response = await axios.get(subdomainPaths);
        const { data } = response;

        // console.log('data: ', data);
        return { lists: data.payload };
      } catch (error) {
        console.log('query-subdomains: ', error);
        return [];
      }
    },
  },
  Blog: {
    articles: async (parent: IBlog, _: IBlogArgs, _context: IContext) => {
      try {
        //      const { req } = context;
        // const token = req.headers;
        // console.log('token: ', token);

        const response = await axios.get(
          `${BASE_URL_ENDPOINT}/api/v1/articles`
        );
        const { data } = response;
        const articles: IArticle[] = data.payload;
        // console.log('articles: ', articles);
        return articles.filter((a) => a.blogId === parent.id);
      } catch (error) {
        console.log('Blog-articles: ', error);
        return [];
      }
    },
  },
  // Blogs: {
  //   articles: async (parent: IBlog, _: IBlogArgs, context: IContext) => {
  //     console.log('parent: ', parent);
  //     const { req } = context;
  //     const token = req.headers;
  // console.log('token: ', token);

  //     const response = await axios.get(`${BASE_URL_ENDPOINT}/api/v1/articles`);
  //     const { data } = response;
  //     const articles: IArticle[] = data.payload;
  //     console.log('articles: ', articles);
  //     return articles.filter((a) => a.blog === parent.id);
  //   },
  // },
};
