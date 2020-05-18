const { readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readJsonData('authors.json');
  const articles = await readJsonData('articles.json');

  for (let i = 0; i < authors.length; i++) {
    authors[i].articlesCount = articles.filter((obj) => obj.authorId === authors[i].id).length; //da se izbroi kolku artikli ima za sekoj avtor
  }
  res.json(authors);
};