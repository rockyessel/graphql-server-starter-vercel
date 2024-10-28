export const Audio = `#graphql

input Filter {
  id: ID
  ownerId: ID
  blogId: ID
  slug: String
  lang: String
  messageId: String
  category: String
  subCategory: String
}

type Audio {
  cid: String!
}

# Change this from 'type' to 'input' for mutation parameters
input AudioCreate {
  language: String!
  text: String!
}

type Query {
  audio(id: String!): Audio
  audios(where: Filter): [Audio!]
}

type Mutation {
  createAudio(params: AudioCreate): Audio!
}
`;
