import { Request, Response } from 'express';

export interface IContext {
  req: Request;
  res: Response;
}

export type AddressType = `0x${string}`;

export interface IUser {
  address: AddressType;
  Ids: AddressType[];
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
  Id: string;
  category: string;
  keywords: string;
  status: string;
  description: string;
  lang: string;
  latestPublishedDate?: string;
  visibility: string;
  content: string;
}

export interface ICambridge {
  word: string;
  pos: string[];
  audio: Audio[];
  definitions: Definition[];
  verbs: Verb[];
}

export interface DictionaryArgs {
  entry: string;
  nationCode?: string;
  languageCode?: string;
}

export interface Verb {
  id: number;
  type: string;
  text: string;
}

export interface Audio {
  pos: string;
  lang: string;
  url: string;
  pron: string;
}

export interface Example {
  id: number;
  text: string;
  translation: string;
}

export interface Definition {
  id: number;
  pos: string;
  source: string | undefined;
  text: string;
  translation: string | undefined;
  example: Example[];
}