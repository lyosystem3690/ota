import React, { useState, useHistory } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
import ComponenteB from './ComponenteB'; // Importa ComponenteB



const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [nombre, setNombre] = useState('');
  const [siaf, setSiaf] = useState('');
  const [fecha, setFecha] = useState('');
  const [numeroComprobante, setNumeroComprobante] = useState('');
  
  const handleInputChange = (e) => {
    setNombre(e.target.value);
  };

  const handleInputChangeSiaf= (e) => {
    setSiaf(e.target.value);
  };

  const handleInputChangeDate= (e) => {
    setFecha(e.target.value);
  };


  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
    const handleClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    const handleRegistro = async (e) => {
      e.preventDefault();
  
      console.log("hola");
  
      try {
        const response = await fetch('http://localhost:5000/api/registro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, siaf, fecha, numeroComprobante  }),
        });
  
        if (response.ok) {
          console.log('Autenticación exitosa');
  
          localStorage.setItem('usuario', email);
  
          // Redirecciona si la autenticación es exitosa
          //history.push('/dashboard'); // Redirecciona si la autenticación es exitosa la Autenticación , redirrecione a dashboard
          window.location.href = '/listarnombre'; // Redirecciona si la autenticación es exitosa
  
  
        } else {
          setErrorMessage('Credenciales inválidas'); // Agregar esta línea
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Error al autenticar'); // Agregar esta línea
      }
    };


 const handleChange = (e) => {
    const inputValue = e.target.value;

    // Verificar si el valor ingresado es un número
    if (/^\d*$/.test(inputValue)) {
      setNumeroComprobante(inputValue);
    }
  };
  

  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
    
    <ComponenteB /> {/* Renderiza ComponenteB aquí */}
      <div style={{  width : '550px',  marginLeft : '25%', padding : '5px' }}>
      <form onSubmit={handleRegistro}>
      <Typography variant="h4" align="center" gutterBottom  style={{ color: 'black', padding : '15px', fontSize : '25px' }}>
       <b>Registrar nombre</b>
        </Typography>
          <TextField
            label="Ingresar nombre de registro"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
            value={nombre}
            required
          />
          <TextField
            label="Ingresar Siaf"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeSiaf}
            type="text"
            value={siaf}
            required
          />
           <TextField
            label=""
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeDate}
            type="date"
            value={fecha}
            required
          />
           <TextField
            label="Ingresar Numero de Comprobante"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
	    onChange={handleChange}
	    value={numeroComprobante}
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