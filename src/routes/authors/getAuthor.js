const { readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const { id } = req.params;
  const authors = await readJsonData('authors.json');
  res.json(authors.find(author => author.id === id));
};
