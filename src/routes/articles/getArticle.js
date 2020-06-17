const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const { articleId } = req.params;
  const articles = await readJsonData('articles.json');
  const article = articles.find(({ id }) => id === articleId); //da se najde article so toa id
  const authors = await readJsonData('authors.json');
  article.author = authors.find(({ id }) => id === article.authorId); //da se najde avtor na article
  article.date = await changeDate(article.date); //da se formatira datata na article
  res.json(article);
};
