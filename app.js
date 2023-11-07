require('./server/config/config')

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

// CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, x-token, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// cors send email
app.use(cors())
// files

// configuracion global de rutas
// Se deben de registrar las rutas a las que se requiera acceso
app.use('', require('./server/routes/index'));

app.get('/', function(req, res) {
    res.sendfile(`./public/index.html`);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening Port:  ${process.env.PORT}`);
});