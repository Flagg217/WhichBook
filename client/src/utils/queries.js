import { gql } from "@apollo/client";

export const GET_ME = gql`
query Query {
  me {
    _id
    email
    savedBooks {
      _id
      authors
      description
      bookId
      image
      link
      title
    }
    username
  }
}
`