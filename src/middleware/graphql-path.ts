import { IContext } from '../types';
import { ApolloServer } from 'apollo-server-express';
import { Request, Response, NextFunction } from 'express';

export const dynamicGraphQLMiddleware = (as: ApolloServer<IContext>) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { path } = req.params;

    // Ensure middleware is applied only once
    if (!req.app.locals.appliedPaths) req.app.locals.appliedPaths = new Set();
    const appliedPaths = req.app.locals.appliedPaths;

    if (!appliedPaths.has(path)) {
      as.applyMiddleware({
        app: req.app as any,
        path: `/${path}/graphql`,
      });
      appliedPaths.add(path);
    }

    next();
  };
};
