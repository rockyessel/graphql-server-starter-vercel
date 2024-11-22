import { DictionaryArgs, ICambridge } from '../../types/index.js';
import { cambridgeProcessEntry } from '../../services/cambridge-dictionary/index.js';
import { ApolloError } from 'apollo-server-express';

export const CambridgeDictionary = {
  Query: {
    dictionary: async (_: ICambridge, args: DictionaryArgs) => {
      const { entry } = args;

      try {
        // Calling the service function
        const data = await cambridgeProcessEntry(
          entry,
          args?.nationCode,
          args?.languageCode
        );

        if (!data) {
          throw new ApolloError(
            'No data found for the given word entry',
            'DATA_NOT_FOUND'
          );
        }

        return data;
      } catch (error) {
        console.error('Error fetching word details:', error);

        // Throw a structured Error
        throw new ApolloError(
          'Unable to fetch word details. Please try again later.',
          'INTERNAL_SERVER_ERROR', // Error code (could be used in client-side handling)
          { originalError: error } // Optionally pass original error details for deeper debugging
        );
      }
    },
  },
};
