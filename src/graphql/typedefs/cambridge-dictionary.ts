import { gql } from 'apollo-server-core';

export const CambridgeDictionary = gql`
  type Example {
    id: Int
    text: String
    translation: String
  }

  enum LocaleEnum {
    us
    es
    ru
    pt
    de
    fr
    it
    zhs
    zht
    pl
    ko
    tr
    ja
    vi
    nl
    sv
    da
    no
    hi
    bn
    mr
    gu
    ta
    te
    uk
  }

  enum LangEnum {
    en
    en_zhs
    en_zht
    en_nl
    en_fr
    en_de
    en_id
    en_it
    en_ja
    en_no
    en_pl
    en_pt
    en_es
    en_sv
    en_ar
    en_bn
    en_ca
    en_cs
    en_da
    en_gu
    en_hi
    en_ko
    en_ms
    en_mr
    en_ru
    en_ta
    en_te
    en_th
    en_tr
    en_uk
    en_ur
    en_vi
  }

  type Definition {
    id: Int
    pos: String
    source: String
    text: String
    translation: String
    examples: [Example]
  }

  type Audio {
    pos: String
    lang: String
    url: String
    pron: String
  }

  type Verb {
    id: Int
    type: String
    text: String
  }

  type WordData {
    word: String
    pos: [String]
    audio: [Audio]
    definitions: [Definition]
    verbs: [Verb]
  }

  type Query {
    getWordDetails(entry: String!, locale: LocaleEnum, lang: LangEnum): WordData
  }
`;
