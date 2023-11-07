const express = require('express');
const { hasMutation } = require('../../libraries/mutationDetector');
const { executeSP } = require('../../libraries/mysql');
const app = express();

// Obtiene las estadisticas de los ADN`s mutados y no mutados
app.get('/stats', (req, res) => {
  let params = [
    1
  ];

  executeSP('Adn_STATS', params).then(response => {
    return res.status(200).json(
      {
        data: response.result,
        executionError: false,
        message: ''
      });
  }).catch(err => {
    return res.status(400).json(
      {
        data: [],
        executionError: true,
        message: err
      });
  });
});

// Obtiene el listado de ADN's
app.get('/adn', (req, res) => {
  let params = [
    1,
    req.query.adnId || null,
    req.query.value || ''
  ];

  executeSP('Adn_READ', params).then(response => {
    return res.status(200).json(
      {
        data: response.result,
        executionError: false,
        message: ''
      });
  }).catch(err => {
    return res.status(400).json(
      {
        data: [],
        executionError: true,
        message: err
      });
  });
});

// Valida las mutaciones del ADN que se envia
app.post('/mutation', (req, res) => {
  // Secuencia de ADN desde la solicitud
  const dna = req.body.dna || []; 

  // Llama a la función hasMutation para verificar la mutación
  const mutacionDetectada = hasMutation(dna);

  // Obtiene los parametros de guardado
  let params = [
    JSON.stringify(req.body.dna),
    mutacionDetectada
  ];

  // Ejecuta el SP de guardado del adn
  executeSP('Adn_CREATE', params).then(response => {

    // Retorna la respuesta dependiendo la validación del adn
    if (mutacionDetectada) {
      res.status(200).json({ mensaje: 'Mutación detectada' });
    } else {
      res.status(403).json({ mensaje: 'No hay mutación' });
    }

  }).catch(err => {
    // Manda el error por falla de guardado en BD
    return res.status(400).json(
      {
          data: [],
          executionError: true,
          message: err
      });
  });


});

// Elimina los ADN guardados 
app.delete('/delete/:id', (req, res) => {
  let params = [
  req.params.id || null
  ];

  executeSP('Adn_DELETE', params).then(response => {
      return res.status(200).json(
          {
              data: response.result,
              executionError: false,
              message: ''
          });
      }).catch (err => {
          return res.status(400).json(
              {
                  data: [],
                  executionError: true,
                  message: err
              });
          });
});

module.exports = app;

