import React, { useState, useHistory } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import {  FaIdCard, FaDoorClosed } from 'react-icons/fa';
//import ReactDOM from 'react-dom';
//import './index.css'; // Archivo de estilos CSS


function ComponenteB() {


  // Obtén el elemento #root
const rootElement = document.getElementById('root');

// Modifica algunas propiedades del elemento #root
rootElement.style.backgroundColor = 'white';



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const usuario = localStorage.getItem('usuario');

      const isAdmin = localStorage.getItem('admin');

  return (

    <Container maxWidth="lg" style={{ paddingTop: '-2rem' }}>
<div style={{ heigth : '200px' ,display: 'flex', justifyContent: 'center', marginBottom: '0rem', background : 'red' }}>
      <div style={{ heigth : '150px' ,display: 'flex', justifyContent: 'center', marginBottom: '0rem', background : 'white', marginRight : '0px' }}>
        <img src="logo.png" alt="Logo" style={{ maxWidth: '265px', marginRight: '1rem' }} />
        </div>
        <div style={{ color: 'white', paddingTop : '48px' }}>
        <Typography variant="h4" align="center" gutterBottom  style={{ color: 'white', padding : '8px' }}>
        <b>DIRECCION REGIONAL DE VIVIENDA, CONSTRUCCION Y SANEAMIENTO </b>
        </Typography>
        <Typography variant="h5" align="center" gutterBottom  style={{ color: 'white', padding : '8px' }}>
      <b>  OFICINA TÉCNICA ADMINISTRATIVA</b>
        </Typography>
        </div>
        <div style={{  paddingTop : '68px' }}>
        {isAdmin === 'true' && (
        <Button href='/listaruser' variant="contained" color="primary" style={{ width:'130px', top: '2rem', heigth:'10px', background: '#BDBDBD', color : 'black', marginRight : '20px', fontSize : '10px' }}>
          <b>Nuevo Usuario</b>
        </Button>
        )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', background : 'black' }}>
        <Button href='/listarnombre' variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
          <b>Nombre</b>
        </Button>
        <Button  href='/listarconcepto' variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Concepto</b>
        </Button>
        <Button  href='/listarobservacion' variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Observación</b>
        </Button>
        <Button variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Importe</b>
        </Button>
        <div style={{ marginLeft : '90px',marginTop : '9px', position: 'relative', display: 'inline-block' }}>
        
      <button
        type="button"
        onClick={handleClick}
        className="avatar-button"
      >
        <img src="3837171.png" alt="Avatar" style={{ width : '40px' }} />
      </button>
      {isMenuOpen && (
        <ul className="avatar-menu" style={{ padding : '10px'}}>
          <li style={{ color : 'white', padding : '10px'}}><img src="3837171.png" alt="Avatar" style={{ width : '36px',display : 'inline' }} /> &nbsp; {usuario} </li>
          {isAdmin === 'true' && (
        <li style={{ color: 'white', padding: '10px' }}>
          <a href='/cambioClave'>
            <FaIdCard style={{ display: 'inline' }} /> Cambiar clave
          </a>
        </li>
      )}
          <li style={{color : 'white',padding : '10px'}}><a href='/' > <FaDoorClosed style={{display : 'inline'}}></FaDoorClosed> Cerrar sesión</a></li>
        </ul>
      )}
    </div>
    </div> 
    </Container>
);
}

export default ComponenteB;
