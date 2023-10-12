var express = require('express');
var router = express.Router();
var query = require('../db/query').query

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    res.json(await query('SELECT * FROM users;'))
  } catch (e) {
    res.status(500).json({error: e})
  }

});

module.exports = router;
