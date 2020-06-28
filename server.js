const express = require('express');
const next = require('next');
const i18next = require('i18next');
const middleware = require('i18next-express-middleware');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n');

i18next.use(middleware.LanguageDetector).init({
  preload: ['en', 'de'],
});

const handler = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));
  // server.use('/static', express.static('static'));
  server.get('/public/static/locales/**/*.json', handler);

  server.get('*', (req, res) => handler(req, res));

  await server.listen(port);
  console.log(`>>> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
