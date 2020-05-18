const router = require('express').Router();

const listAuthors = require('./listAuthors');
const createAuthor = require('./createAuthor');
const getAuthor = require('./getAuthor');
const listAuthorArticles = require('./listAuthorArticles');
const deleteAuthor = require('./deleteAuthor');

router
  .route('/')

  .get(listAuthors)
  .post(createAuthor);

router.route('/:id').get(getAuthor).delete(deleteAuthor);

router.route('/:id/articles').get(listAuthorArticles);

module.exports = router;
