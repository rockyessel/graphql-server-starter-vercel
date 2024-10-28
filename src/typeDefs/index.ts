import { mergeTypeDefs } from '@graphql-tools/merge';

import { Users } from './users.js';
import { Articles } from './articles.js';
import { Orgs } from './orgs.js';
import { Blogs } from './blogs.js';
import { Audio } from './audio.js';

export const typeDefs = mergeTypeDefs([Users, Articles, Orgs, Blogs, Audio]);
