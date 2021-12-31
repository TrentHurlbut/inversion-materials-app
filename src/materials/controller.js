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

const addMaterial = (req, res) => {
  const { name, unit_cost } = req.body;

  //preventing duplicate adding, checking if material exists. Variable that we pass into the SQL query is in the array argument.
  pool.query(queries.checkMaterialExists, [name], (error, results) => {
    if (error) res.send(error);
    if (results.rows.length) {
      res.send("Material already exists.")
    }
    pool.query(queries.addMaterial, [name, unit_cost], (error, results) => {
      if (error) throw (error);
      res.status(201).send("Material added successfully!")
    })
  })
  
}

const deleteMaterial = (req, res) => {
  const id  = parseInt(req.params.id);
  pool.query(queries.getMaterialsById, [id], (error, results) => {
    const noMaterialFound = !results.rows.length;
    if (error) throw error;
    if (noMaterialFound) {
      res.send("Material doesn't exist in database.")
    }
    pool.query(queries.deleteMaterial, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Material deleted successfully.")
    })
  })
}

const updateMaterialName = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getMaterialsById, [id], (error, results) => {
    const noMaterialFound = !results.rows.length;
    if (error) throw error;
    if (noMaterialFound) {
      res.send("Material doesn't exist in database.")
    }
    pool.query(queries.updateMaterialName, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Material updated successfully.");
    })
  })
}

module.exports = {
  getMaterials,
  getMaterialsById,
  addMaterial,
  deleteMaterial,
  updateMaterialName,
}