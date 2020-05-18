const router = require('express').Router();

const listArticles = require('./listArticles');
const createArticle = require('./createArticle');
const getArticle = require('./getArticle');
const getArticleComments = require('./getArticleComments');
const deleteArticle = require('./deleteArticle');
const updateArticle = require('./updateArticle');

router
  .route('/')

  .get(listArticles)
  .post(createArticle);

router
  .route('/:articleId')
  .get(getArticle)
  .delete(deleteArticle)
  .put(updateArticle);

router.route('/:articleId/comments').get(getArticleComments);

module.exports = router;
