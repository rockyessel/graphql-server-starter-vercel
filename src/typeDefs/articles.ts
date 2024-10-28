export const Articles = `#graphql



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




input ArticleFilter {
  id: ID
  messageId: String
  ownerId: ID
  blogId: ID
  slug: String
  lang: String
  title: String
  category: String
  subCategory: String
  createdAt: String
  updatedAt: String
  visibility: String
  status: String
  enableComments: Boolean
  licenseType: LicenseType
  licenseCid: String
}


type Article {
  id: ID!
  messageId: String!
  title: String!
  coverCid: String!
  subTitleCaption: String
  blogId: ID!
  ownerId: ID!
  createdBy: ID!
  slug: String!
  category: String!
  subCategory: String!
  lang: String!
  tags: [String!]!
  status: String!
  visibility: String!
  description: String!
  seoImage: String
  seoTitle: String
  seoKeywords: [String!]
  seoDescription: String
  publishedDate: String!
  isPublished: Boolean!
  contentCid: String!
  audioCid: String!
  transferredBy: ID
  createdAt: String!
  updatedAt: String!
  licenseType: String
  licenseCid: String
  linkToPublications: String
  blog:Blog!
}

type Query {
    articles:[Article!],
    articles(where: ArticleFilter): [Article!]
    article(id:ID!): Article
    articleSlug(slug:String!): Article
}

`;
