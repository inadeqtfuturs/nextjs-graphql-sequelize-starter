const { gql } = require('apollo-server-micro');

const todos = require('./todo');

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;

module.exports = [
  rootType,
  todos
];
