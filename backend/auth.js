const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

    if (results.length > 0) {
      res.send('Autenticación exitosa');
    } else {
      res.status(401).send('Credenciales inválidas');
    }
  });
});

module.exports = router;
