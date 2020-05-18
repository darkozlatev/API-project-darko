const { v4: uuidv4 } = require('uuid');
const { writeJsonData, readJsonData } = require('../../utils');

module.exports = async (req, res) => {
  const authors = await readJsonData('authors.json');
  id = uuidv4();

  if (!req.body.name) {
    throw new Error('Name is required');
  }
  if (!req.body.email) {
    throw new Error('Email is required');
  }

  if (!req.body.username || req.body.username.length < 3) {
    throw new Error('Invalid username');
  }

  if (!req.body.website || req.body.website.length < 8) {
    throw new Error('Invalid article website');
  }

  if (!req.body.bio || req.body.bio.length < 30) {
    throw new Error('Invalid article bio');
  }

  const author = {
    id: id,
    name: req.body.name,
    username: req.body.username,
    website: req.body.website,
    bio: req.body.bio,
    email: req.body.email
  };

  authors.push(author);
  await writeJsonData(authors, 'authors.json');
  res.json({
    author
  });
};
