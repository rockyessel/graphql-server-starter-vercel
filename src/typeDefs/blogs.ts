export const Blogs = `#graphql

enum LicenseType {
  CreativeCommonsAttribution
  MIT
  GPL
  Apache
  Custom
  None
  OpenAccess
  FreeArtLicense
  OpenContentLicense
  GFDL
  CCBYNC
  CCBYND
  CC0
  CCBYSA
  CCBY
}

type Socials {
  x: String!
  linkedin: String!
  instagram: String!
}


input BlogFilter {
  id: ID
  ownerId: ID
  name: String
  category: String
  subCategory: String
  subdomain: String
  isTransferActive: Boolean
  createdAt: String
  updatedAt: String
  lang: String
  visibility: String
  status: String
  enableComments: Boolean
  enableNewsletter: Boolean
  authorPenName: String
  licenseType: LicenseType
}

type Blog {
  id: ID!
  ownerId: ID!
  messageId: String!
  createdBy: String!
  name: String!
  subdomain: String!
  customDomain: String
  category: String!
  subCategory: String!
  isTransferActive: Boolean!
  createdAt: String!
  updatedAt: String!
  keywords: String!
  commonTags: String!
  lang: String!
  description: String!
  visibility: String!
  publishingSchedule: String!
  status: String!
  enableComments: Boolean!
  enableNewsletter: Boolean!
  authorPenName: String!
  socials: Socials!
  licenseType: LicenseType!,
  licenseCid: String!,
  favicon: String
  articles: [Article!]
}

type SubdomainType {
  lists: [String!]
}

type Query {
  blogs(where: BlogFilter): [Blog!]
  blog(id: ID!): Blog
  subdomains: SubdomainType
}

`;
