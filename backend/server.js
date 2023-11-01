const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./auth');
const cors = require('cors'); // Agrega esta línea


const app = express();
app.use(cors()); // Usa el middleware cors


app.use(bodyParser.json());
app.use('/api', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
