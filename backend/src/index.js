/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviadoas na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilixados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgresSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
