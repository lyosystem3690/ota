import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
import ComponenteB from './ComponenteB'; // Importa ComponenteB



const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [observacion, setobservacion] = useState('');
  const [mesyano, setMesyano] = useState('');
  const [concepto_id, setConcepto] = useState('');

  const handleInputChangeObservacion = (e) => {
    setobservacion(e.target.value);
  };

  const handleInputChangeMesyano= (e) => {
    setMesyano(e.target.value);
  };

  const handleInputChangeConcepto= (e) => {
    setConcepto(e.target.value);
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
        const response = await fetch('http://localhost:5000/api/observacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ observacion, mesyano, concepto_id  }),
        });
  
        if (response.ok) {
          console.log('Autenticación exitosa');
  
          localStorage.setItem('usuario', email);
  
          // Redirecciona si la autenticación es exitosa
          //history.push('/dashboard'); // Redirecciona si la autenticación es exitosa la Autenticación , redirrecione a dashboard
          window.location.href = '/listarobservacion'; // Redirecciona si la autenticación es exitosa
  
  
        } else {
          setErrorMessage('Credenciales inválidas'); // Agregar esta línea
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Error al autenticar'); // Agregar esta línea
      }
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
      <div style={{  width : '550px',  marginLeft : '25%', padding : '5px' }}>
      <form onSubmit={handleRegistro}>
      <Typography variant="h4" align="center" gutterBottom  style={{ color: 'black', padding : '15px', fontSize : '25px' }}>
       <b>Registrar Observación</b>
        </Typography>
          <TextField
            label="Ingresar Observación"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeObservacion}
            value={observacion}
            required
          />
           <TextField
            label=""
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeMesyano}
            type="date"
            value={mesyano}
            required
          />
          <select  style={{  width : '540px', marginTop : '10px' }} name="concepto_id" onChange={handleInputChangeConcepto}  >
           <option value=""> -- Selecciona el Concepto --</option>
           {usuarios.map(usuario => {
          // Convertir la fecha en un objeto Date

          return (
            <option value={usuario.ids}>{usuario.ccc}</option>
            )})};
          </select>
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