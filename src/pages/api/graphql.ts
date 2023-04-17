// Add Graphql Apollo Hello-world Query
// To-Do: Add mutation example.
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

const PASSWORD: String = '123456';
const SECRET: String = process.env.secret || 'WHY EXPOSE A SECRET 😢';
const NODE_ENV: String = process.env.NODE_ENV;

const resolvers = {
  Query: {
    hello: () => 'world',
    attemptHardCodedCreds: () => {
        password : PASSWORD
        secret: SECRET
        node_env: NODE_ENV

    }
  },
};

const typeDefs = gql`
  type Query {
    hello: String,
    attemptHardCodedCreds: {
        password: String,
        secret: String,
        node_env: String
    }
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server)