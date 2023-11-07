const readfiles = require('node-readfiles');
const express = require('express');
const app = express();

readfiles(__dirname, function (err, filename, contents) {
  if (err) throw err;
  if(filename!=='index.js') {
    var ruta = './'+ filename.replace('\\','/').replace('.js','');
    // console.log('Ruta Cargada ' + ruta);
    app.use(require(ruta)) ; 
  }
}).then(function (files) {
  console.log('Load ' + files.length + ' Route(s)');
}).catch(function (err) {
  console.log('Error reading files:', err.message);
});


module.exports = app;