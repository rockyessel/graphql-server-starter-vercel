import cheerio from 'cheerio';
import { ICambridge } from '../../types';
import {
  extractDefinitionsFromPage,
  getAudioFromPage,
  getVerbsFromWiki,
  prepareUrl,
} from './helpers';

export const cambridgeProcessEntry = async (
  entry: string,
  nationCode?: string,
  languageCode?: string
): Promise<ICambridge | undefined> => {
  try {
    const url = prepareUrl(entry, nationCode, languageCode);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch page data');
    }

    const htmlData = await response.text();

    if (!htmlData || htmlData.trim().length === 0) {
      throw new Error('No HTML data received');
    }

    const $ = cheerio.load(htmlData);

    const word = $('.hw.dhw').first().text();

    if (!word) {
      console.warn('Word not found in the page.');
      return {
        word: entry,
        pos: [],
        audio: [],
        definitions: [],
        verbs: [],
      };
    }

    const partsOfSpeech =
      $('.pos.dpos')
        .map((_, element) => $(element).text())
        .get() || [];

    const audioData = getAudioFromPage($);

    const definitionsData = extractDefinitionsFromPage($);

    const verbList = await getVerbsFromWiki(entry);

    return {
      word,
      pos: partsOfSpeech,
      audio: audioData,
      definitions: definitionsData,
      verbs: verbList,
    };
  } catch (error: any) {
    console.error('cambridgeProcessEntry:', error.message || error);
    return {
      word: entry,
      pos: [],
      audio: [],
      definitions: [],
      verbs: [],
    };
  }
};
