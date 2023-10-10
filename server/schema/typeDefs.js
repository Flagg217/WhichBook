const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
}
  input BookInput {
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
