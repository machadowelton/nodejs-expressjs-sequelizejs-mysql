const express = require('express');
const compression = require('compression');
const app = express();
const bodyparser = require('body-parser');
app.use(compression());
app.use(bodyparser.urlencoded({ extended : false}));
app.use(bodyparser.json());
const port = process.env.PORT || 8000;

const routerStatus = express.Router();
const routerUsuario = require('./app/routes/usuario');
const routerEmprestimo = require('./app/routes/emprestimo');

routerStatus.get('/status',(req, res) => {
    res.json({mensagem:'ok'});
});

routers = [
    routerStatus,
    routerUsuario,
    routerEmprestimo
];

app.use('/api', routers);
app.listen(port);