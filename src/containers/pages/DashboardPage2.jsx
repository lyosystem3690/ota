import React, { useState, useEffect  } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
import ComponenteB from './ComponenteB'; // Importa ComponenteB



const Dashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [clasificacion, setClasificacion] = useState('');
  const [follio, setFollio] = useState('');
  const [registro_id, setRegistro] = useState('');
  

  const handleInputChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleInputChangeSiaf= (e) => {
    
    let inputValue = e.target.value;

    // Usamos una expresión regular para permitir solo números y puntos
    const regex = /^[0-9.]+$/;
    if (regex.test(inputValue)) {
      setClasificacion(e.target.value);
    }
   
  };

  const handleInputChangeFollio= (e) => {
    let inputValue = e.target.value;

    // Limitar la longitud máxima a 3 caracteres
    if (inputValue.length <= 3) {
      setFollio(inputValue);
    }


  };

  const handleInputChangeRegistro= (e) => {
    setRegistro(e.target.value);
  };


  const [errorMessage, setErrorMessage] = useState('');
  
    const handleClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };


    const handleRegistro = async (e) => {
      e.preventDefault();
  
      console.log("hola");
  
      try {
        const response = await fetch('http://localhost:5000/api/concepto', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({descripcion,clasificacion,follio,registro_id }),
        });
  
        if (response.ok) {
          console.log('Autenticación exitosa');
  
        
          // Redirecciona si la autenticación es exitosa
          //history.push('/dashboard'); // Redirecciona si la autenticación es exitosa la Autenticación , redirrecione a dashboard
          window.location.href = '/listarconcepto'; // Redirecciona si la autenticación es exitosa
  
  
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
    fetch('http://localhost:5000/api/listarnames')
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
       <b>Registrar Concepto</b>
        </Typography>
          <TextField
            label="Ingresar la descripción"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
            value={descripcion}
            required
          />
        
          <TextField
            label="Ingresar clasificación"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleInputChangeSiaf}
            type="text"
            value={clasificacion}
            required
          />
          <TextField
            label="Ingresar Folio"
            variant="outlined"
            fullWidth
            margin="normal"
            maxlength="3"
            onChange={handleInputChangeFollio}
            type="number"
            value={follio}
            required
          />
           <select  style={{  width : '540px', marginTop : '10px' }} name="registro_id"  onChange={handleInputChangeRegistro} >
           <option value="">--Selecciona el Nombre--</option>
           {usuarios.map(usuario => {
          // Convertir la fecha en un objeto Date

          return (
            <option value={usuario.id}>{usuario.nombre}</option>
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