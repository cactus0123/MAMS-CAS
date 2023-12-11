const Pool = require("pg").Pool;
const { Pool } = require("pg");

//local db for testing purposes
const pool = new Pool({
  user: "vishal",
  password: "password",
  host: "localhost",
  port: "5432",
  database: "PERNtut",
});

module.exports = pool;
