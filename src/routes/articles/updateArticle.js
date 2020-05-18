const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');

  if (!req.params.articleId) {
    throw new Error('ID is required');
  }
  if (!req.body.authorId) {
    throw new Error('Author ID is required');
  }

  if (!req.body.title || req.body.title.length < 3) {
    throw new Error('Invalid article title');
  }

  if (!req.body.summary || req.body.summary.length < 20) {
    throw new Error('Invalid article summary');
  }

  if (!req.body.body || req.body.body.length < 30) {
    throw new Error('Invalid article body');
  }

  if (!req.body.tags || req.body.tags.length < 1) {
    throw new Error('Invalid article tags');
  }

  let article = articles.find(({ id }) => id === req.params.articleId);

  if (!article) {
    throw new Error('There is no article with that ID');
  }
  article = {
    id: req.params.articleId,
    authorId: req.body.authorId,
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.body,
    tags: req.body.tags,
    date: req.body.date
  };

  await writeJsonData(articles, 'articles.json');
  res.json({
    articles
  });
};
