const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const comments = await readJsonData('comments.json');
  const { id } = req.params;
  const authorAricles = articles.filter(article => article.authorId === id) //da se zemat site articles na eden avtor

  for (let i = 0; i < authorAricles.length; i++) {
    authorAricles[i].date = await changeDate(authorAricles[i].date); //da se smeni datumot vo readable format za site articles
    authorAricles[i].commentsLength = comments.filter(comment => comment.articleId === authorAricles[i].id).length;
  }

  res.json(authorAricles);
};
