import axios from 'axios';
import cheerio, { CheerioAPI } from 'cheerio';
import { Audio, Definition, Verb } from '../../types/index.js';
import { getLanguage, getLocale } from '../../libs/helpers/index.js';
import {
  CAMBRIDGE_BASE_URL,
  WIKI_BASE_URL,
} from '../../libs/constants/index.js';

export const getVerbsFromWiki = async (
  searchedTerm: string
): Promise<Verb[]> => {
  try {
    const wikiUrl = `${WIKI_BASE_URL}/${searchedTerm}`;
    const response = await axios.get(wikiUrl);
    if (response.status !== 200) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const $$ = cheerio.load(response.data);
    const verbText = $$('tr > td > p').text();

    const lines = verbText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    const verbs: Verb[] = [];
    for (let i = 0; i < lines.length; i += 2) {
      const type = lines[i];
      const text = lines[i + 1];
      if (type && text) {
        verbs.push({ id: verbs.length, type, text });
      }
    }
    return verbs;
  } catch (error: any) {
    console.error(
      'getVerbsFromWiki::Error fetching verbs:',
      error.message || error
    );
    return [];
  }
};

export const prepareUrl = (
  searchedTerm: string,
  localeValue?: string,
  langValue?: string
) => {
  const locale = getLocale(localeValue);
  const lang = getLanguage(langValue);
  const URL = `${CAMBRIDGE_BASE_URL}/${locale.code}/dictionary/${lang}/${searchedTerm}`;
  return URL;
};

export const getAudioFromPage = ($: CheerioAPI): Audio[] => {
  const audioData: Audio[] = [];
  $('.pos-header.dpos-h').each((_, element) => {
    const posNode = $(element).find('.dpos-g').first();
    const partOfSpeech = posNode.text() || 'unknown';

    $(element)
      .find('.dpron-i')
      .each((_, audioElement) => {
        const language =
          $(audioElement).find('span').first().text() || 'unknown';
        const audioTag = $(audioElement).find('audio').first();
        const sourceUrl = audioTag.find('source').attr('src');
        const pronunciation = $(audioElement).find('.ipa').text() || 'unknown';

        if (sourceUrl) {
          const audioUrl = `${CAMBRIDGE_BASE_URL}/${sourceUrl}`;

          audioData.push({
            pos: partOfSpeech,
            lang: language,
            url: audioUrl,
            pron: pronunciation,
          });
        }
      });
  });
  return audioData;
};

// Function to extract definitions and examples from the page
export const extractDefinitionsFromPage = ($: CheerioAPI): Definition[] => {
  try {
    return $('.def-block.ddef_block')
      .map((index, element) => {
        const definitionElement = $(element);
        const partOfSpeech = definitionElement
          .closest('.entry-body__el')
          .find('.pos.dpos')
          .text();
        const sourceId = definitionElement
          .closest('.pr.dictionary')
          .attr('data-id');
        const definitionText = definitionElement.find('.def.ddef_d.db').text();
        const translationText = definitionElement.find('.trans.dtrans').text();
        const exampleSentences = definitionElement
          .find('.def-body.ddef_b > .examp.dexamp')
          .map((exampleIndex, exampleElement) => {
            const exampleText = $(exampleElement).find('.eg.deg').text();
            const exampleTranslationText = $(exampleElement)
              .find('.trans.dtrans')
              .text();
            return {
              id: exampleIndex,
              text: exampleText,
              translation: exampleTranslationText,
            };
          })
          .get();

        return {
          id: index,
          pos: partOfSpeech,
          source: sourceId,
          text: definitionText,
          translation: translationText,
          example: exampleSentences,
        };
      })
      .get();
  } catch (error) {
    console.error('Error in extractDefinitionsFromPage:', error);
    return [];
  }
};
