import path from 'path';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { createApolloServer } from './graphql/index.js';
import { isVercelProduction } from './libs/constants/index.js';
import { dynamicGraphQLMiddleware } from './middleware/graphql-path.js';

const PORT = process.env.PORT || 8000;
const serverMsg = `Server running on: http://localhost:${PORT}/graphql`;

const app: any = express();
const httpServer = http.createServer(app);

let apolloServerStarted = false;

const startApolloServer = async () => {
  const apolloServer = await createApolloServer(httpServer);
  // Start the server only if not already started
  if (!apolloServerStarted) {
    await apolloServer.start();
    apolloServerStarted = true;
  }
  // Apply middleware once
  apolloServer.applyMiddleware({ app });
  // Apply dynamic middleware for additional paths
  app.use('/:path/graphql', dynamicGraphQLMiddleware(apolloServer));
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

startApolloServer();

if (!isVercelProduction) app.listen(PORT, () => console.log(serverMsg));

export { httpServer };
