import { mergeTypeDefs } from '@graphql-tools/merge';
import { CambridgeDictionary } from './cambridge-dictionary.js';

export const typeDefs = mergeTypeDefs([CambridgeDictionary]);
