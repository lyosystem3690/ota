import React, { useState, useHistory } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
import ComponenteB from './ComponenteB'; // Importa ComponenteB


const Dashboard = () => {

  const [numeroComprobante, setNumeroComprobante] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [pa, setPa] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


    const handleClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };



  const handleCambio = async (e) => {
    e.preventDefault();

    console.log("hola");

    const email = localStorage.getItem('usuario');

    console.log(email);
    console.log(pa);
        


    try {
      const response = await fetch('http://localhost:5000/api/cambio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, pa }),
      });

      if (response.ok) {
        console.log('Autenticación exitosa');

        // Redirecciona si la autenticación es exitosa
        //history.push('/dashboard'); // Redirecciona si la autenticación es exitosa la Autenticación , redirrecione a dashboard
        window.location.href = '/dashboard'; // Redirecciona si la autenticación es exitosa


      } else {
        setErrorMessage('Credenciales inválidas'); // Agregar esta línea
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error al autenticar'); // Agregar esta línea
    }
  };

  const handleInputChange = (e) => {
    setPa(e.target.value);
  };
  

  return (
    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
       <ComponenteB /> {/* Renderiza ComponenteB aquí */}

      <div style={{  width : '550px',  marginLeft : '25%', padding : '5px' }}>


      <form onSubmit={handleCambio}>
      <Typography variant="h4" align="center" gutterBottom  style={{ color: 'black', padding : '15px', fontSize : '25px' }}>
       <b>Cambio Clave</b>
        </Typography>
          <TextField
            label="Ingresar nueva clave"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={pa}
            onChange={handleInputChange} //
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
            Cambiar Clave
          </Button>
        </form>
        </div>
    </Container>
  );
};

export default (Dashboard);