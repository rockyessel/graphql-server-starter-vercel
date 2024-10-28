import { Request, Response, NextFunction } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { IContext } from '../types';

export const dynamicGraphQLMiddleware = (as: ApolloServer<IContext>) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const { path } = req.params;
    // console.log(`Dynamic path used: ${path}`);

    as.applyMiddleware({
      app: req.app as any,
      path: `/${path}/graphql`,
    });
    next();
  };
};
