import { mergeResolvers } from '@graphql-tools/merge';

import { Orgs } from './orgs.js';
import { Users } from './users.js';
import { Blogs } from './blogs.js';
import { Audio } from './audio.js';
import { Articles } from './articles.js';

export const resolvers = mergeResolvers([Users, Articles, Orgs, Blogs, Audio]);
