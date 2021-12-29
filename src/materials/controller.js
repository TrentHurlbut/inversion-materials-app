//Business Logic
const pool = require('../../db')
const queries = require('./queries')

//First arg is SQL request
//Second arg is error-first function. Converts the rows received from db to JSON object.
const getMaterials = (req, res) => {
  console.log("request sent");
  pool.query(queries.getMaterials, (error, results) => {
    if (error) throw (error);
    res.status(200).json(results.rows);
  });
}

const getMaterialsById = (req, res) => {
  //parseInt() is needed to convert the string value at the end of the url into an int for SQL.
  const id = parseInt(req.params.id);
  //second arg is any of the values you are passing into the query, has to be an array.
  pool.query(queries.getMaterialsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  }) 
}

module.exports = {
  getMaterials,
  getMaterialsById,
}