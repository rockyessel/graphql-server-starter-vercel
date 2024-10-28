import { Request, Response } from 'express';

export interface IContext {
  req: Request;
  res: Response;
}

export type AddressType = `0x${string}`;

export interface IUser {
  address: AddressType;
  blogIds: AddressType[];
  articleIds: AddressType[];
}

export interface IArticle {
  id: string;
  title: string;
  ownerId: string;
  createdBy: string;
  slug: string;
  tags: string;
  cover: string;
  blogId: string;
  category: string;
  keywords: string;
  status: string;
  description: string;
  lang: string;
  latestPublishedDate?: string;
  visibility: string;
  content: string;
}

export interface IBlog {
  id: string;
  ownerId: string;
  messageId: string;
  createdBy: string;
  name: string;
  subdomain: string;
  customDomain?: string;
  category: string;
  subCategory: string;
  isTransferActive: boolean;
  createdAt: string;
  updatedAt: string;
  keywords: string;
  commonTags: string;
  lang: string;
  description: string;
  visibility: string;
  publishingSchedule: string;
  status: string;
  enableComments: boolean;
  enableNewsletter: boolean;
  authorPenName: string;
  socials: {
    x: string;
    linkedin: string;
    instagram: string;
  } | null;
  license: LicenseContent;
  favicon?: string;
}

export type LicenseType =
  | 'CreativeCommonsAttribution'
  | 'MIT'
  | 'GPL'
  | 'Apache'
  | 'Custom'
  | 'None'
  | 'OpenAccess'
  | 'FreeArtLicense'
  | 'OpenContentLicense'
  | 'GFDL'
  | 'CCBYNC'
  | 'CCBYND'
  | 'CC0'
  | 'CCBYSA'
  | 'CCBY';

export type LicenseContent = {
  licenseType: LicenseType;
  contentCid: string;
};

export interface Org {
  owner: string;
  createdBy: string;
  name: string;
  username: string;
  pageType: string;
  category: string;
  readme?: string;
  tags?: string[];
  focusedTags?: string[];
  profile?: string;
  cover?: string;
  isPremium?: boolean;
  entryAmount: number;
  compareEntryAmount: number;
  createdAt: string;
  updatedAt: string;
  status: string;
  visibility: string;
  contactEmail?: string;
  website?: string;
  pageRules?: string;
  favicon?: string;
  title: string;
  description?: string;
}

export interface IUserArgs {
  address: AddressType;
}

export interface ArticleArgs {
  id: string;
  where?: object;
}

export interface IBlogArgs {
  id: string;
  where?: object;
}

export interface OrgArgs {
  orgId: string;
}

export interface AudioArgs {
  params: {
    text: string;
    language: string;
  };
}
