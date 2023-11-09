import React, { useState, useHistory } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
import ComponenteB from './ComponenteB'; // Importa ComponenteB



const Dashboard = () => {

  const [nombre, setNombre] = useState('');
  const [clave, setClave] = useState('');
  const [usuario, setUsuario] = useState('');
  const [dni, setDni] = useState('');
  const [telefono, setTelefono] = useState('');  
  const [perfil, setPerfil] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  const handleInputChangeDni = (e) => {

    const inputValue = e.target.value;
    // Verificar si el valor ingresado es un número
    if (/^\d*$/.test(inputValue)) {
      setDni(inputValue);
    }
  };

  const handleInputChangeTelefono= (e) => {
    const inputValue = e.target.value;
    // Verificar si el valor ingresado es un número
    if (/^\d*$/.test(inputValue)) {
      setTelefono(inputValue);
    }

   
  };

  const handleInputChangeUsuario= (e) => {
    setUsuario(e.target.value);
  };

  const handleInputChangePerfil= (e) => {
    setPerfil(e.target.value);
  };

  const handleInputChangeClave= (e) => {
    setClave(e.target.value);
  };


    const handleRegistro = async (e) => {
      e.preventDefault();
  
      console.log("hola");
  
      try {
        const response = await fetch('http://localhost:5000/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ dni, nombre, telefono, usuario, clave, perfil  }),
        });
  
        if (response.ok) {
          console.log('Autenticación exitosa');

          window.location.href = '/listaruser';
          // Redirecciona si la autenticación es exitosa
          //history.push('/listaruser'); // Redirecciona si la autenticación es exitosa la Autenticación , redirrecione a dashboard
      //    window.location.href = '/dashboard'; // Redirecciona si la autenticación es exitosa
  
  
        } else {
          setErrorMessage('Credenciales inválidas'); // Agregar esta línea
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Error al autenticar'); // Agregar esta línea
      }
    };


  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
    
    <ComponenteB /> {/* Renderiza ComponenteB aquí */}
      <div style={{  width : '550px',  marginLeft : '25%', padding : '5px' }}>

    

      <form onSubmit={handleRegistro}>
      <Typography variant="h4" align="center" gutterBottom  style={{ color: 'black', padding : '15px', fontSize : '25px' }}>
       <b>Registrar Usuario</b>
        </Typography>
        <TextField
            label="Ingresar dni"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeDni}
            value={dni}
            required
          />
          <TextField
            label="Ingresar nombre completo"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
            value={nombre}
            required
          />
          <TextField
            label="Ingresar telefono"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeTelefono}
            value={telefono}
            required
          />
          <TextField
            label="Ingresar Usuario del usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeUsuario}
            type="text"
            value={usuario}
            required
          />
          <TextField
            label="Ingresar Clave del usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeClave}
            type="text"
            value={clave}
            required
          />
           <TextField
            label="Perfil de usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangePerfil}
            type="text"
            value="Usuario"
            disabled
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Registrar
          </Button>
        </form>
        </div>
    </Container>
  );
};

export default (Dashboard);