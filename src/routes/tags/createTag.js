const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const tags = await readJsonData('tags.json');
  const key = req.body.key;
  const value = req.body.value;

  if (!req.body.key) {
    throw new Error('You must enter a name for the tag');
  }
  if (!req.body.value) {
    throw new Error('You must enter description for the tag');
  }
  if (tags[key]) {
    throw new Error('This tag already exists');
  }

  tags[key] = value;
  await writeJsonData(tags, 'tags.json');
  res.json(tags);
};
