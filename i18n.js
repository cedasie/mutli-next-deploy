const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
    caches: ['cookie'],
    excludeCacheFor: ['cimode'],
  },
  keySeparator: false,
  ignoreRoutes: ['/.next/', '/static/', '/public/', '/api/'],
});
