//App lives on https://peaceful-earth-31656.herokuapp.com/

const Pool = require('pg').Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "inversion_materials",
  password: "test",
  port: 5432,
})

module.exports = pool;