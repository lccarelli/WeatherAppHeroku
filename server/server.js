require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

mongoose.connect('mongodb://weather:weather@ds247648.mlab.com:47648/weatherappdb', (err,res) => {
  if (err) throw err;
  console.log('conectado a la bd ok!')
});


/*---------------------------NOTA -- para deploy a prod de NODE + REACT -------------------------*/
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../client/build')));
/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/

app.use(require('./routes/usuario'));
// All remaining requests return the React app, so it can handle routing.
// No matter what the user ask, we send the index.html, which loads ReactRouter, and that takes care of routing
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
/*--------------- ROUTING FOR REACT on PRODUCTION ------------------*/





app.listen(process.env.PORT, () => {
  console.log('Example app listening on port', process.env.PORT);
});
