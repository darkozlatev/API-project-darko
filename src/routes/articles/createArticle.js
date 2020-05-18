const { v4: uuidv4 } = require('uuid');
const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  id = uuidv4();

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

  const article = {
    id: id,
    authorId: req.body.authorId,
    title: req.body.title,
    summary: req.body.summary,
    body: req.body.body,
    tags: req.body.tags,
    date: new Date()
  };

  articles.push(article);
  await writeJsonData(articles, 'articles.json');
  res.json({
    article
  });
};
