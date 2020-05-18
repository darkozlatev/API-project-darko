const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const comments = await readJsonData('comments.json');

  const found = articles.some(article => article.id === req.params.articleId);

  if (found) {
    const newArticles = articles.filter(
      article => article.id !== req.params.id
    );
    const newComments = comments.filter(
      comment => comment.articleId !== req.params.articleId
    );

    await writeJsonData(newArticles, 'articles.json');
    await writeJsonData(newComments, 'comments.json');
    res.json({
      message: 'Article is deleted'
    });
  } else {
    res.status(404).json({ message: 'No article with that id' });
  }
};
