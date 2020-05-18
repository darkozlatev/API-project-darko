const router = require('express').Router();

const listTags = require('./listTags');
const listTagSlug = require('./listTagSlug');
const listTagArticles = require('./listTagArticles');
const createTag = require('./createTag');
const deleteTag = require('./deleteTag');

router
  .route('/')

  .get(listTags)
  .post(createTag);

router
  .route('/:slug')

  .get(listTagSlug);

router.route('/:slug/articles').get(listTagArticles);

router.route('/:key').delete(deleteTag);

module.exports = router;
