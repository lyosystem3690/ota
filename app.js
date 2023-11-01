const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());

//app.use(express.static(path.join(__dirname, 'build')));

app.get('/cors', (req, res) => {
  res.send({ "msg": "This has CORS enabled 🎈" })
})



app.get('/stakingall', (req, res) => {
 // res.send({ "msg": "This has CORS enabled 🎈" })
 //res.sendFile(path.resolve(__dirname, 'src/components/staking/StakingController.js'));
 res.send('stakingall');
// res.render('stakingall');
 // call the function to get the data
 // res.sendFile(path.resolve(__dirname, 'src/components/index.js'));

})


app.listen(9003);