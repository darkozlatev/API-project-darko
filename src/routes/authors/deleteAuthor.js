const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readJsonData('authors.json');
  const articles = await readJsonData('articles.json');
  const comments = await readJsonData('comments.json');

  const found = authors.some(author => author.id === req.params.id);

  if (found) {
    const newAuthors = authors.filter(author => author.id !== req.params.id);

    const newArticles = articles.filter(
      article => article.authorId !== req.params.id
    );
    const newComments = comments.filter(
      comment => comment.userId !== req.params.id
    );

    await writeJsonData(newAuthors, 'authors.json');
    await writeJsonData(newArticles, 'articles.json');
    await writeJsonData(newComments, 'comments.json');
    res.json({
      message: 'Author is deleted'
    });
  } else {
    res.status(404).json({ message: 'No author with that id' });
  }
};
