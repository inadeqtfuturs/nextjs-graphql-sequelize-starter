import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { makeExecutableSchema } from '@graphql-tools/schema';

import typeDefs from '@graphql/schema';
import resolvers from '@graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
};

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  // add middleware here
  server.createHandler({
    path: '/api/graphql'
  })(req, res);
}