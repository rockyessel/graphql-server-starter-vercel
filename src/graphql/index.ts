import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import { typeDefs } from '../typeDefs/index.js';
import { resolvers } from '../resolvers/index.js';
import { IContext } from '../types/index.js';
import http from 'http';

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

  await apolloServer.start();
  return apolloServer;
};
