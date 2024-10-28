export const Orgs = `#graphql

type Org {
    owner: ID!,
    createdBy: ID!,
    name: String!,
    username: String!,
    pageType: String!,
    category: String!,
    readme: String,
    tags: [String!],
    focusedTags: [String!],
    profile: String,
    cover: String,
    # socials: Vec<Social>,
    isPremium: Boolean,
    entryAmount: Int,
    compareEntryAmount:Int,
    createdAt: String!,
    updatedAt: String!,
    status: String!,
    visibility: String!,
    contactEmail: String,
    website: String,
    pageRules: String,
    favicon: String,
    title: String!,
    description: String,
}

type Query {
    orgs:[Org!],
    org(orgId:ID!): Org
}

`;
