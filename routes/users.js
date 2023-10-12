var express = require('express');
var router = express.Router();
var query = require('../db/query').query

/* GET users listing. */
router.get('/', async function (req, res) {
  try {
    res.json(await query('SELECT * FROM users;'))
  } catch (e) {
    res.status(500).json({error: e})
  }

});

router.post('/', async function (req, res) {
  try {
    await query(`INSERT INTO users(username, lastname, firstname, age, rights, status) VALUES (${req.body.username}, ${req.body.lastname}, ${req.body.firstname}, ${req.body.age}, ${req.body.rights}, ${req.body.status});`)
    res.status(201).json({message: 'Utilisateur créé avec succès', users: await query('SELECT * FROM users;')})
  } catch (e) {
    res.status(500).json({error: e})
  }
})

module.exports = router;
