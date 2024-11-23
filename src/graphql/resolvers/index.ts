import { mergeResolvers } from '@graphql-tools/merge';
import { CambridgeDictionary } from './cambridge-dictionary.js';
import { DummyUser } from './dummy-user.js';
import { DummyPost } from './dummy-post.js';

export const resolvers = mergeResolvers([CambridgeDictionary, DummyUser, DummyPost]);
