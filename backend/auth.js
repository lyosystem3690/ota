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


router.post('/cambio', (req, res) => {
  const { pa } = req.body;

  const query = 'update usuarios set password = ? where id = 1';
  
  db.query(query, [pa], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });
});


router.post('/registro', (req, res) => {
  const { nombre, siaf, fecha, numeroComprobante } = req.body;

  const query = 'insert into registro (nombre,siaf,fecha,comprobante) values (?,?,?,?)';
  
  db.query(query, [nombre, siaf, fecha, numeroComprobante], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('se hizo el registro');
    
  });
});


router.post('/concepto', (req, res) => {
  const {descripcion,clasificacion,follio,registro_id } = req.body;

  const query = 'insert into concepto (descripcion,clasificacion,follio,registro_id) values (?,?,?,?)';
  
  db.query(query, [descripcion,clasificacion,follio,registro_id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('se hizo el registro');
    
  });
});


router.post('/user', (req, res) => {
  const { dni,nombre, usuario, telefono, clave, perfil } = req.body;

  const query = 'insert into usuarios (dni,nombre,email, telefono ,password,perfil) values (?,?,?,?,?,"Usuario")';
  
  db.query(query, [dni,nombre, usuario, telefono, clave, perfil], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('se hizo el registro');
    
  });
});

router.post('/observacion', (req, res) => {
  const {observacion,mesyano, concepto_id	 } = req.body;

  const query = 'insert into observacion (observacion,mesyano, concepto_id) values (?,?,?)';
  
  db.query(query, [observacion,mesyano, concepto_id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('se hizo el registro');
    
  });
});

router.get('/listarusers', (req, res) => {
  const query = 'SELECT * FROM usuarios';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al obtener los usuarios');
      return;
    }

    res.json(results);
  });
});

router.get('/listarnames', (req, res) => {
  const query = 'SELECT * FROM registro';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al obtener los usuarios');
      return;
    }

    res.json(results);
  });
});

router.get('/listarconceptos', (req, res) => {
  const query = 'SELECT *,r.nombre as registrosss,c.descripcion as ccc,c.id as ids FROM concepto as c inner join registro as r on r.id = c.registro_id ';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al obtener los usuarios');
      return;
    }

    res.json(results);
  });
});

router.get('/listarusuarios', (req, res) => {
  const query = 'SELECT * FROM registro';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al obtener los usuarios');
      return;
    }

    res.json(results);
  });
});

router.get('/listarobservacion', (req, res) => {
  const query = 'SELECT *, c.descripcion as d,o.id as idx FROM observacion as o inner join concepto as c on o.concepto_id = c.id';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al obtener los usuarios');
      return;
    }

    res.json(results);
  });
});




router.post('/deluser/:id', (req, res) => {
  const id = req.params.id;

  const query = 'delete from usuarios where id = ?';
  
  db.query(query, [id], (err, results) => {
   
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });
});

router.delete('/delconcepto/:id', (req, res) => {
  const id = req.params.id;

  const query = 'delete from concepto where id = ?';
  
  db.query(query, [id], (err, results) => {
   
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });
});

router.delete('/delobservacion/:id', (req, res) => {
  const id = req.params.id;

  const query = 'delete from observacion where id = ?';
  
  db.query(query, [id], (err, results) => {
   
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });
});

// Ruta para el borrado de usuario
router.delete('/deluser/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Aquí deberías tener tu lógica para borrar el usuario de la base de datos
  // Por ejemplo, si estás utilizando MySQL:
   const query = 'DELETE FROM usuarios WHERE id = ?';

   db.query(query, [id], (err, results) => {
     if (err) {
       console.error('Error al borrar el usuario:', err);
       res.status(500).send('Error al borrar el usuario');
       return;
     }

  //   res.send(`Usuario con ID ${id} borrado exitosamente`);
   });

  // Simulando la operación de borrado

  res.send(`Usuario con ID ${id} borrado exitosamente`);
});


// Ruta para el borrado de usuario
router.delete('/delnombre/:id', (req, res) => {
  const id = parseInt(req.params.id);

  // Aquí deberías tener tu lógica para borrar el usuario de la base de datos
  // Por ejemplo, si estás utilizando MySQL:
   const query = 'DELETE FROM registro WHERE id = ?';

   db.query(query, [id], (err, results) => {
     if (err) {
       console.error('Error al borrar el usuario:', err);
       res.status(500).send('Error al borrar el usuario');
       return;
     }

  //   res.send(`Usuario con ID ${id} borrado exitosamente`);
   });

  // Simulando la operación de borrado

  res.send(`Usuario con ID ${id} borrado exitosamente`);
});


router.post('/edituser/:id', async (req, res) => {
  const { dni, nombre, email, telefono } = req.body;
  const id = req.params.id;

  const query = 'update usuarios set dni = ?, nombre = ?, email = ?, telefono = ? where id = ?';
  
  db.query(query, [dni, nombre, email, telefono, id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });

});


router.post('/editnombre/:id', async (req, res) => {
  const { nombre, siaf, fecha, comprobante } = req.body;
  const id = req.params.id;

  const query = 'update registro set nombre = ?, siaf = ?, fecha = ?, comprobante = ? where id = ?';
  
  db.query(query, [nombre, siaf, fecha, comprobante,  id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });

});

router.post('/editconcepto/:id', async (req, res) => {
  const { descripcion,clasificacion, follio } = req.body;
  const id = req.params.id;

  const query = 'update concepto set descripcion = ?, clasificacion	 = ?, 	follio = ?  where id = ?';
  
  db.query(query, [descripcion,clasificacion, follio,  id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });

});


router.post('/editobservacion/:id', async (req, res) => {
  const { observacion,mesyano } = req.body;
  const id = req.params.id;

  const query = 'update observacion set observacion = ?, mesyano	 = ?  where id = ?';
  
  db.query(query, [observacion,mesyano,  id], (err, results) => {
   

    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Error al autenticar');
      return;
    }

      res.send('Cambio de clave exitosa');
    
  });

});


module.exports = router;


