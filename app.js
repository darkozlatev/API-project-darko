//
// Your code goes here
//

const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);

app.listen(port, () =>
  console.log(`Example app and listening at http://localhost:${port}`)
);

/* const articles = require('./src/data/articles.json');
const comments = require('./src/data/comments.json');
const authors = require('./src/data/authors.json');
const tags = require('./src/data/tags.json');

app.get('/articles', (req, res) => {
  const { page = 0 } = req.query;
  res.json(pagination(articles, page));
});

app.get('/articles/:articleId', (req, res) => {
  const { articleId } = req.params;

  res.json(articles.find(({ id }) => id === articleId));
});

app.get('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const { page = 0 } = req.query;

  let commentsByArticle = comments.filter(
    comment => comment.articleId === articleId
  );
  res.json(pagination(commentsByArticle, page));
});

app.get('/authors', (req, res) => {
  const { page = 0 } = req.query;

  res.json(pagination(authors, page));
});

app.get('/authors/:authorId', (req, res) => {
  const { authorId } = req.params;

  res.json(authors.find(({ id }) => id === authorId));
});

app.get('/authors/:authorId/articles', (req, res) => {
  const { authorId } = req.params;
  const { page = 0 } = req.query;

  let articlesByAuthor = articles.filter(x => x.authorId === authorId);

  res.json(pagination(articlesByAuthor, page));
});

app.get('/tags', (req, res) => {
  res.json(tags);
});

app.get('/tags/:slug', (req, res) => {
  const { slug } = req.params;
  res.json(tags[slug]);
});

app.get('/tags/:slug/articles', (req, res) => {
  const { slug } = req.params;
  const { page = 0 } = req.query;

  let articlesByTag = articles.filter(t => t.tags.includes(slug));
  res.json(pagination(articlesByTag, page));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

function pagination(products, page) {
  const PRODUCTS_PER_PAGE = 10;

  return products.slice(
    +page * PRODUCTS_PER_PAGE,
    (+page + 1) * PRODUCTS_PER_PAGE
  );
} */
