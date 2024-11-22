import { mergeResolvers } from '@graphql-tools/merge';
import { CambridgeDictionary } from './cambridge-dictionary.js';

export const resolvers = mergeResolvers([CambridgeDictionary]);
