import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography, Modal } from '@mui/material';
import ComponenteB from './ComponenteB'; // Importa ComponenteB

const ListaNombre = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [observacion, setObservacion] = useState('');
  const [mesyano, setMesyano] = useState('');
  const [comprobante, setComprobante] = useState('');
  const [fecha, setFecha] = useState('');
  

  const handleBorrar = async (id) => {
    try {
     // alert(id);
      const response = await fetch(`http://localhost:5000/api/delobservacion/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Usuario con ID ${id} borrado exitosamente.`);
        // Actualizar la lista de usuarios después del borrado
        const updatedUsuarios = usuarios.filter(usuario => usuario.id !== id);
        setUsuarios(updatedUsuarios);
        window.location.href = '/listarobservacion';
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
      const response = await fetch(`http://localhost:5000/api/editobservacion/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ observacion, mesyano  }),
      });
  
      if (response.ok) {
        console.log('Usuario actualizado exitosamente');
        window.location.href = '/listarobservacion';
      } else {
        console.error('Error al actualizar el usuario');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditar = (usuario) => {
    setSelectedUser(usuario);
    setMesyano(usuario.mesyano); // Inicializa el estado nombre
    setObservacion(usuario.observacion); // Inicializa el estado email
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedUser(null);
  };

  useEffect(() => {
    // Realizar la solicitud al servidor Node.js
    fetch('http://localhost:5000/api/listarobservacion')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error:', error));
  }, []);



  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
    
    <ComponenteB /> {/* Renderiza ComponenteB aquí */}
      <div style={{  width : '850px',  marginLeft : '15%', padding : '5px' }}>
      <div className="container mt-4">
      <Button href='/dashboard3' variant="contained" color="primary" style={{ width:'150px', heigth:'10px', background: '#BDBDBD', color : 'white', marginRight : '20px', fontSize : '10px' }}>
                    <b>Nueva Observacion</b>
                    </Button>
    <br></br>
    <br></br>
      <h1><b>Listado de Observación</b></h1>
      <br></br>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Observación</th>
            <th>Mes y Año</th>
            <th>Concepto</th>
            <th>Acci&oacute;n</th>
          </tr>
        </thead>
        <tbody>
        {usuarios.map(usuario => {
          // Convertir la fecha en un objeto Date
          const fecha = new Date(usuario.mesyano);

          // Obtener día, mes y año
          const dia = fecha.getDate();
          const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11 en JavaScript
          const anio = fecha.getFullYear();
        
          // Formatear la fecha como "dd-mm-yyyy"
          const fechaFormateada = `${dia < 10 ? '0' : ''}${dia}-${mes < 10 ? '0' : ''}${mes}-${anio}`;
        
          return (
             
            <tr key={usuario.id}>
              <td>{usuario.observacion}</td>
              <td>{fechaFormateada}</td>
              <td>{usuario.d}</td>
              <td> <Button
                      variant="contained"
                      color="primary"
                      style={{ width:'60px', heigth:'10px', background: '#0634B9', color : 'white', marginRight : '20px', fontSize : '10px' }}
                      onClick={() => handleEditar(usuario)}
                    >
                      <b>Editar</b>
                    </Button>
                    <Button
                  onClick={() => handleBorrar(usuario.idx)}
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
            Editar Observacion
          </Typography>
          {selectedUser && (
            <div>
              <form onSubmit={(e) => {
  e.preventDefault();
  handleRegistro(selectedUser.idx);
}}>
  <TextField 
    fullWidth 
    label="observacion" 
    variant="outlined" 
    value={observacion}
    onChange={(e) => setObservacion(e.target.value)} 
  />
  <br></br><br />
  <TextField 
    fullWidth 
    label="mesyano" 
    variant="outlined" 
    type="date" 
    value={mesyano}
    onChange={(e) => setMesyano(e.target.value)} 
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
