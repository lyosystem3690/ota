import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Modal } from '@mui/material';
import ComponenteB from './ComponenteB'; // Importa ComponenteB

const ListaUsuarios = () => {
  
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [clave, setClave] = useState('');
  const [email, setUsuario] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');  
  const [perfil, setPerfil] = useState('');


  const handleBorrar = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/deluser/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Usuario con ID ${id} borrado exitosamente.`);
        // Actualizar la lista de usuarios después del borrado
        const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(updatedUsuarios);
      } else {
        console.error('Error al borrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const  handleRegistro = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/edituser/${selectedUser.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dni, nombre, telefono, email, clave, perfil  }),
      });
  
      if (response.ok) {
        console.log('Usuario actualizado exitosamente');
        window.location.href = '/listaruser';
      } else {
        console.error('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /*const handleEditar = (usuario) => {
    setSelectedUser(usuario);
    setOpenModal(true);
  };*/

  const handleEditar = (usuario) => {
    setSelectedUser(usuario);
    setDni(usuario.dni); // Inicializa el estado dni
    setNombre(usuario.nombre); // Inicializa el estado nombre
    setUsuario(usuario.email); // Inicializa el estado email
    setTelefono(usuario.telefono); // Inicializa el estado telefono
    setClave(usuario.clave); // Inicializa el estado clave
    setPerfil(usuario.perfil); // Inicializa el estado perfil
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };


  useEffect(() => {
    // Realizar la solicitud al servidor Node.js
    fetch('http://localhost:5000/api/listarusers')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
    
    <ComponenteB /> {/* Renderiza ComponenteB aquí */}
      <div style={{  width : '850px',  marginLeft : '15%', padding : '5px' }}>
      <div className="container mt-4">
      <Button href='/user' variant="contained" color="primary" style={{ width:'150px', heigth:'10px', background: '#BDBDBD', color : 'white', marginRight : '20px', fontSize : '10px' }}>
                    <b>Nuevo Usuario</b>
                    </Button>
    <br></br>
    <br></br>
      <h1><b>Listado de Usuarios</b></h1>
      <br></br>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Dni</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Tel&eacute;fono</th>
            <th>Perfil</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.dni}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.perfil}</td>
              <td> <Button
                      variant="contained"
                      color="primary"
                      style={{ width:'60px', heigth:'10px', background: '#0634B9', color : 'white', marginRight : '20px', fontSize : '10px' }}
                      onClick={() => handleEditar(usuario)}
                    >
                      <b>Editar</b>
                    </Button>
                    {usuario.id !== 1 && (
                    <Button
                  onClick={() => handleBorrar(usuario.id)}
                  variant="contained"
                  color="primary"
                  style={{ width: '60px', height: '30px', background: '#FF0000', color: 'white', marginRight: '20px', fontSize: '10px' }}
                >
                  <b>Borrar</b>
                  </Button>
                   )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
{/* Modal de Edición */}
<Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="div" id="modal-modal-title" sx={{ mb: 2 }}>
            Editar Usuario
          </Typography>
          {selectedUser && (
            <div>
              <form onSubmit={(e) => {
  e.preventDefault();
  handleRegistro(selectedUser.id);
}}>
  <TextField 
    fullWidth 
    label="Dni" 
    variant="outlined" 
    value={dni}
    onChange={(e) => setDni(e.target.value)} 
  />
  <br></br><br />
  <TextField 
    fullWidth 
    label="Nombre" 
    variant="outlined" 
    value={nombre}
    onChange={(e) => setNombre(e.target.value)} 
  />
   <br></br><br />
  <TextField 
    fullWidth 
    label="Usuario" 
    variant="outlined" 
    value={email}
    onChange={(e) => setUsuario(e.target.value)} 
  />
   <br></br><br />
  <TextField 
    fullWidth 
    label="Telefono" 
    variant="outlined" 
    value={telefono}
    onChange={(e) => setTelefono(e.target.value)} 
  />
   <br></br><br />
  <TextField 
    fullWidth 
    label="Clave" 
    variant="outlined" 
    value={clave}
    onChange={(e) => setClave(e.target.value)} 
  />
   <br></br><br />
  <Button
    type="submit"
    variant="contained"
    color="primary"
    fullWidth
    size="large"
    sx={{ mt: 2 }}
  >
    Actualizar
  </Button>
</form>
            </div>
          )}
        </Box>
      </Modal>

    </Container>
  );
};

export default ListaUsuarios;
