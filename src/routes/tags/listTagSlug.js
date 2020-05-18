const { readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const { tagSlug } = req.params;
  const tags = await readJsonData('tags.json');
  res.json(tags.find(({ slug }) => slug === tagSlug));
};
