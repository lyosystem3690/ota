import React, { useState, useHistory, useEffect  } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaEye, FaEyeDropper,  FaEyeSlash } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    // Modificando el fondo de la etiqueta <html>
    document.querySelector('html').style.background = '#83e0d8';
  }, []); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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

        localStorage.setItem('usuario', email);
        if(email === 'admin'){
            localStorage.setItem('admin', true);
        }else{
            localStorage.setItem('admin', false);
        }   
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


   const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
          Iniciar Sesión
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
      <TextField
      label="Contraseña"
      variant="outlined"
      fullWidth
      margin="normal"
      type={showPassword ? 'text' : 'password'}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      InputProps={{
        endAdornment: (
          <button  type="button"
            onClick={togglePasswordVisibility}
            style={{ background: 'transparent', border: 'none' }}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        ),
      }}
    />
           <div>
    </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Ingresar
          </Button>
        </form>
        <div style={{ align : 'center',marginLeft: '90px',padding : '9px' }} >
            <a href='olvido' ><b>¿ Olvido la constraseña ?</b> </a>
        </div>
      </Box>
    </Container>

  );
};

export default (Home);