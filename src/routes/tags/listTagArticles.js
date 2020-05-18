const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const articles = await readJsonData('articles.json');
  const authors = await readJsonData('authors.json');
  const comments = await readJsonData('comments.json');
  let tagArticles;
  const { slug } = req.params;
  if (slug === 'null') { //ako prateme slug null togas vrati gi site artikli bez razlika na tag
    tagArticles = articles;
  }
  else {
    tagArticles = articles.filter(article => article.tags.includes(slug));
  }

  for (let i = 0; i < tagArticles.length; i++) {
    tagArticles[i].author = authors.filter((obj) => obj.id === tagArticles[i].authorId)[0]; //da se najde avtorot za article
    tagArticles[i].commentsLength = comments.filter((obj) => obj.articleId === tagArticles[i].id).length; //za da se izbrojat komentarite
    tagArticles[i].date = await changeDate(tagArticles[i].date); //da se smeni datumot vo readable format
  }
  res.json(tagArticles);
};

/* let articlesByTag = articles.filter(t => t.tags.includes(slug));
res.json(pagination(articlesByTag, page));
}); */
