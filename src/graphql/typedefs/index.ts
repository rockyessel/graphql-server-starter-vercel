import { DummyUser } from './dummy-user.js';
import { DummyPost } from './dummy-post.js';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { CambridgeDictionary } from './cambridge-dictionary.js';

export const typeDefs = mergeTypeDefs([
  CambridgeDictionary,
  DummyUser,
  DummyPost,
]);
