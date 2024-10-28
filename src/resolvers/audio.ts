import axios from 'axios';
import { AudioArgs, IContext } from '../types/index.js';
import { BASE_URL_ENDPOINT } from '../libs/constants/index.js';

interface IAudio {
  id: string;
}

export const Audio = {
  Query: {},
  Mutation: {
    createAudio: async (_: IAudio, args: AudioArgs, _context: IContext) => {
      const { params } = args; //

      const response = await axios.post(`${BASE_URL_ENDPOINT}/api/v1/tts`, {
        ...params,
      });

      return {
        cid: response.data.cid,
      };
    },
  },
};
