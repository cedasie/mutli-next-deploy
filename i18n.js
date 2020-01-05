const NextI18Next = require('next-i18next').default;
const config = require('next/config').default();
const get = require('lodash/get');

const localeSubpaths = get(
  config,
  'publicRuntimeConfig.localeSubpaths',
  'none'
);

const EN = 'en';
const DE = 'de';

const localeSubpathMapping = {
  none: {},
  en: EN,
  de: DE,
  all: {
    en: EN,
    de: DE
  }
};

module.exports = new NextI18Next({
  otherLanguages: [EN, DE],
  localeSubpaths: localeSubpathMapping[localeSubpaths],
  load: true
});
