import { IContext } from '../types/index.js';
import { ApolloServer } from 'apollo-server-express';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SAMPLE_AUTH_KEY } from '../libs/constants/index.js';
import { JWT_SECRET } from '../libs/configs/env.js';

export const dynamicGraphQLMiddleware = (as: ApolloServer<IContext>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { path: username } = req.params;

    if (username) {
      const authHeader = req.headers[SAMPLE_AUTH_KEY] as string;
      if (!authHeader) {
        res.status(403).json({ error: 'Access denied: No token provided' });
        return;
      }
      const token = authHeader.split(' ')[1];
      try {
        jwt.verify(token, JWT_SECRET);
        // you can also verify the user's data from the decoded token
        // if it matches to a dataset in your database.
      } catch (error) {
        res.status(403).json({ error: 'Access denied: Invalid token' });
        return;
      }

      // Apply middleware for GraphQL path dynamically
      if (!req.app.locals.appliedPaths) req.app.locals.appliedPaths = new Set();
      const appliedPaths = req.app.locals.appliedPaths;

      if (!appliedPaths.has(username)) {
        as.applyMiddleware({
          app: req.app as any,
          path: `/${username}/graphql`,
        });
        appliedPaths.add(username);
      }
    }

    next();
  };
};
