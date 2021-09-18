const { gql } = require('apollo-server-micro');

module.exports = gql`
  type Todo {
    id: ID!
    name: String!
    status: Boolean!
  }

  extend type Query {
    todos(input: TodoInput): [Todo]
    todo(id: ID!): Todo
  }

  extend type Mutation {
    createTodo(name: String!): Todo
    updateTodo(id: ID!, name: String, status: Boolean): Todo
    deleteTodo(id: ID!): DeleteTodoResponse
  }

  input TodoInput {
    id: ID
    name: String
    status: Boolean
  }

  type DeleteTodoResponse {
    id: ID
  }
`;