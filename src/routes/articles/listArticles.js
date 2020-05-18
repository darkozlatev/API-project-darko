//list all articles da go vrakja avtorot i brojot na komentari za daden article

const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const authors = await readJsonData('authors.json');
  const comments = await readJsonData('comments.json');


  for (let i = 0; i < articles.length; i++) {
    articles[i].author = authors.filter((obj) => obj.id === articles[i].authorId)[0]; //da se najde avtorot za article
    articles[i].commentsLength = comments.filter((obj) => obj.articleId === articles[i].id).length; //za da se izbrojat komentarite
    articles[i].date = await changeDate(articles[i].date); //da se smeni datumot vo readable format
  }

  res.json(articles);
};
