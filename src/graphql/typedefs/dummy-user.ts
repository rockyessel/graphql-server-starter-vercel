import { gql } from 'apollo-server-core';

export const DummyUser = gql`
  enum GenderEnum {
    female
    male
  }

  type User {
    id: ID
    firstName: String!
    lastName: String!
    maidenName: String!
    age: Int!
    gender: GenderEnum!
    email: String!
    phone: String!
    username: String!
    password: String!
    birthDate: String!
    image: String
    bloodGroup: String
    height: String
    weight: String
    eyeColor: String
    posts:[Post]


  }

  type UserResponse {
    users: [User]
    total: Int
    skip: Int
    limit: Int
  }

  type Query {
    users(skip: Int, limit: Int): UserResponse
  }
`;
