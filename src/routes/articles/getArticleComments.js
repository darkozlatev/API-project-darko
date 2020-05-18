const { readJsonData, changeDate } = require('../../utils');

module.exports = async (req, res) => {
  const comments = await readJsonData('comments.json');
  const { articleId } = req.params;
  const articleComments = comments.filter(comment => comment.articleId === articleId); //da se najdat komentarite na toj article

  for (let i = 0; i < articleComments.length; i++) {
    articleComments[i].date = await changeDate(articleComments[i].date); //da se smeni datumot vo readable format za site komentari
  }
  res.json(articleComments);
};
