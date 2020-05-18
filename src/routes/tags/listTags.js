const { readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const tags = await readJsonData('tags.json');

  res.json(tags);
};
