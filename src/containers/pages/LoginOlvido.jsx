import React, { useState, useHistory, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';




const LoginOlvido = () => {
  useEffect(() => {
    // Modificando el fondo de la etiqueta <html>
    document.querySelector('html').style.background = '#83e0d8';
  }, []); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const history = useHistory();


  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("hola");

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
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

  return (
    <Container maxWidth="xs" style={{ background : 'white',borderRadius : '9px', paddingBottom : '16px' }}>
     
      <Box mt={10}>
        <img
          src="logo.png"
          alt="Logo"
          style={{ marginBottom: '16px', maxWidth: '80%',marginLeft: '20px' }}
        />
      
        <Typography variant="h4" align="center" gutterBottom>
          Olvido Clave
        </Typography>
           {/* ... (resto del código) */}
      {errorMessage && (
        <Typography variant="body1" color="error" align="center">
         <b> {errorMessage}</b>
        </Typography>
      )}
        <form onSubmit={handleLogin}>
          <TextField
            label="Usuario"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Recuperar accesos
          </Button>
        </form>
        <div style={{ align : 'center',marginLeft: '130px',padding : '9px' }} >
            <a href='/' ><b> Iniciar Sesión </b> </a>
        </div>
      </Box>
    
    </Container>
  );
};

export default (LoginOlvido);