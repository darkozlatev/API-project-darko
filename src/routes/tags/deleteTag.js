const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const tags = await readJsonData('tags.json');
  const { key } = req.params;

  if (!tags[key]) {
    throw new Error('There is no such tag');
  }

  delete tags[key];

  await writeJsonData(tags, 'tags.json');
  res.json(tags);
};
