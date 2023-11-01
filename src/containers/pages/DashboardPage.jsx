import React, { useState, useHistory } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';




const Dashboard = () => {

  

  return (
    <Container maxWidth="lg" style={{ paddingTop: '2rem' }}>
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
        <div style={{  paddingTop : '28px' }}>
        <Button variant="contained" color="primary" style={{ top: '2rem', heigth:'10px', background: '#BDBDBD', color : 'black', marginRight : '20px' }}>
          <b>Nuevo Usuario</b>
        </Button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', background : 'black' }}>
        <Button variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
          <b>Nombre</b>
        </Button>
        <Button variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Concepto</b>
        </Button>
        <Button variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Observación</b>
        </Button>
        <Button variant="contained" color="primary" style={{ margin: '0.5rem', background: '#000000', fontSize : '16px' }}>
        <b>Importe</b>
        </Button>
   
      </div>
      <div style={{  width : '550px',  marginLeft : '27%', padding : '5px' }}>
      <form >
      <Typography variant="h4" align="center" gutterBottom  style={{ color: 'black', padding : '15px', fontSize : '25px' }}>
       <b>Registrar nombre</b>
        </Typography>
          <TextField
            label="Ingresar nombre de registro"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Ingresar Siaf"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
            required
          />
           <TextField
            label=""
            variant="outlined"
            fullWidth
            margin="normal"
            type="date"
            required
          />
           <TextField
            label="Ingresar Numero de Comprobante"
            variant="outlined"
            fullWidth
            margin="normal"
            type="text"
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