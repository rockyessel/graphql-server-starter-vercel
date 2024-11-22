import http from 'http';
import { IContext } from '../types/index.js';
import { typeDefs } from './typedefs/index.js';
import { resolvers } from './resolvers/index.js';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';

export const createApolloServer = async (httpServer: http.Server) => {
  const plugins = [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({
      embed: true,
      footer: false,
    }),
  ];

  // Create a new ApolloServer instance
  const apolloServer = new ApolloServer<IContext>({
    typeDefs,
    resolvers,
    plugins,
    introspection: true,
    cache: 'bounded',
    context: async ({ req, res }) => ({ req, res }),
  });

  return apolloServer;
};
