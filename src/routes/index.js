const router = require('express').Router();

const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

router.use('/articles', articles);
router.use('/authors', authors);
router.use('/tags', tags);

/* router.use('/authors', authors);
router.use('/tags', tags);
 */
module.exports = router;
