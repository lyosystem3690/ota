const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./auth');
const cors = require('cors'); // Agrega esta línea


const app = express();
app.use(cors()); // Usa el middleware cors


app.use(bodyParser.json());
app.use('/api', authRouter);
app.use('/cambio', authRouter);
app.use('/registro', authRouter);
app.use('/user', authRouter);
app.use('/listarusers', authRouter);
app.use('/deluser', authRouter);
app.use('/listarnames', authRouter);
app.use('/delnombre', authRouter);
app.use('/edituser', authRouter);
app.use('/editnombre', authRouter);
app.use('/listarconceptos', authRouter);
app.use('/listarobservacion', authRouter);
app.use('/listarusuarios', authRouter);
app.use('/concepto', authRouter);
app.use('/observacion', authRouter);
app.use('/delobservacion', authRouter);
app.use('/delconcepto', authRouter);
app.use('/editconcepto', authRouter);
app.use('/editobservacion', authRouter);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
