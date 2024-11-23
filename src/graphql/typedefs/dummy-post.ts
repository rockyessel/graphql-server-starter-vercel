import { gql } from 'apollo-server-core';

export const DummyPost = gql`
  type Reaction {
    likes: Int!
    dislikes: Int!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    tags: [String]!
    reactions: Reaction! # Using Reaction type
    views: Int!
    userId: ID!
    user: User!
  }

  type PostResponse {
    posts: [Post]
    total: Int
    skip: Int
    limit: Int
  }

  type Query {
    posts(userId: Int!, skip: Int, limit: Int): PostResponse
    authorize_posts(skip: Int, limit: Int): PostResponse
  }
`;
