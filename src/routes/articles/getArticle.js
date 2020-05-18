const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const { articleId } = req.params;
  const articles = await readJsonData('articles.json');
  const article = articles.find(({ id }) => id === articleId) //da se najde article so toa id
  article.date = await changeDate(article.date); //da se formatira datata na article
  res.json(article);
};
