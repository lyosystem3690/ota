import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Modal } from '@mui/material';
import ComponenteB from './ComponenteB'; // Importa ComponenteB

const ListaNombre = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [clasificacion, setClasificacion] = useState('');
  const [follio, setFollio] = useState('');
  const [registro_id, setFecha] = useState('');
  

  const handleBorrar = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/delconcepto/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Usuario con ID ${id} borrado exitosamente.`);
        // Actualizar la lista de usuarios después del borrado
        const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(updatedUsuarios);
        window.location.href = '/listarconcepto';
      } else {
        console.error('Error al borrar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const  handleRegistro = async (id) => {
    try {
     //alert(id);
      const response = await fetch(`http://localhost:5000/api/editconcepto/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ descripcion,clasificacion, follio  }),
      });
  
      if (response.ok) {
        console.log('Usuario actualizado exitosamente');
        window.location.href = '/listarconcepto';
      } else {
        console.error('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditar = (usuario) => {
    setSelectedUser(usuario);
    setDescripcion(usuario.descripcion); // Inicializa el estado nombre
    setClasificacion(usuario.clasificacion); // Inicializa el estado email
    setFollio(usuario.follio); // Inicializa el estado telefono
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    // Realizar la solicitud al servidor Node.js
    fetch('http://localhost:5000/api/listarconceptos')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
    
    <ComponenteB /> {/* Renderiza ComponenteB aquí */}
      <div style={{  width : '850px',  marginLeft : '15%', padding : '5px' }}>
      <div className="container mt-4">
      <Button href='/dashboard2' variant="contained" color="primary" style={{ width:'150px', heigth:'10px', background: '#BDBDBD', color : 'white', marginRight : '20px', fontSize : '10px' }}>
                    <b>Nuevo Concepto</b>
                    </Button>
    <br></br>
    <br></br>
      <h1><b>Listado de Concepto</b></h1>
      <br></br>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Descripci&oacute;n</th>
            <th>Clasificaci&oacute;n</th>
            <th>Folio</th>
            <th>Nombre</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario => {
          // Convertir la fecha en un objeto Date
  

          // Formatear la fecha como "dd-mm-yyyy"
       
          return (
            
            <tr key={usuario.id}>
              <td>{usuario.descripcion}</td>
              <td>{usuario.clasificacion}</td>
              <td>{usuario.follio}</td>
              <td>{usuario.registrosss}</td>
              <td> <Button
                      variant="contained"
                      color="primary"
                      style={{ width:'60px', heigth:'10px', background: '#0634B9', color : 'white', marginRight : '20px', fontSize : '10px' }}
                      onClick={() => handleEditar(usuario)}
                    >
                      <b>Editar</b>
                    </Button>
                    <Button
                  onClick={() => handleBorrar(usuario.ids)}
                  variant="contained"
                  color="primary"
                  style={{ width: '60px', height: '30px', background: '#FF0000', color: 'white', marginRight: '20px', fontSize: '10px' }}
                >
                  <b>Borrar</b>
                  </Button>
              </td>
            </tr>
           );
          })}
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
            Editar Concepto
          </Typography>
          {selectedUser && (
            <div>
              <form onSubmit={(e) => {
  e.preventDefault();
  handleRegistro(selectedUser.ids);
}}>
  <TextField 
    fullWidth 
    label="Ingresar la descripción" 
    variant="outlined" 
    value={descripcion}
    onChange={(e) => setDescripcion(e.target.value)} 
  />
  <br></br><br />
  <TextField 
    fullWidth 
    label="Ingresar clasificación" 
    variant="outlined" 
    value={clasificacion}
    onChange={(e) => setClasificacion(e.target.value)} 
  />
   <br></br><br />
  <TextField 
    fullWidth 
    label="Ingresar Follio" 
    variant="outlined"
    type="text" 
    value={follio}
    onChange={(e) => setFollio(e.target.value)} 
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

export default ListaNombre;
