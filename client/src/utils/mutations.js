import { gql } from "@apollo/client";




export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      savedBooks {
        description
        _id
        authors
        bookId
        title
      }
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;

export const DELETE_BOOK = gql`
mutation Mutation($bookId: String!) {
  deleteBook(bookId: $bookId) {
    _id
    email
    username
  }
}
`;
export const SAVE_BOOK = gql`
mutation Mutation($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    email
    savedBooks {
      _id
      authors
      bookId
      description
      image
      link
      title
    }
  }
}
`;
