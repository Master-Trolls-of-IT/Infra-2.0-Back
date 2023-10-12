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
    await query(`INSERT INTO users(username, lastname, firstname, age, rights, status) VALUES ('${req.body.username}', '${req.body.lastname}', '${req.body.firstname}', ${req.body.age}, ${req.body.rights}, '${req.body.status}');`)
    res.status(201).json({message: 'Utilisateur créé avec succès', users: await query('SELECT * FROM users;')})
  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.post('/:id', async function (req, res) {
  try {
    await query(`UPDATE users SET username = '${req.body.username}' , lastname = '${req.body.lastname}', firstname = '${req.body.firstname}', age = ${req.body.age}, rights = ${req.body.rights}, status = '${req.body.status}' WHERE id = ${req.params.id};`)
    res.status(201).json({message: 'Utilisateur modifié', users: await query('SELECT * FROM users;')})
  } catch (e) {
    res.status(500).json({error: e})
  }
})

router.delete('/:id', async function (req, res) {
  try {
    await query(`DELETE FROM users WHERE id = ${req.params.id}`)
    res.status(201).json({message: 'Utilisateur supprimé', users: await query('SELECT * FROM users;')})
  } catch (e) {
    res.status(500).json({error: e})
  }
})

module.exports = router;
