//Business Logic
import pool from './db';
import queries from './queries';

//First arg is SQL request
//Second arg is error-first function. Converts the rows received from db to JSON object.
const getMaterials = (req: any, res: any) => {
  console.log("request sent");
  pool.query(queries.getMaterials, (error: any, results: any) => {
    if (error) throw (error);
    res.status(200).json(results.rows);
  });
}

const getMaterialsById = (req: any, res: any) => {
  //parseInt() is needed to convert the string value at the end of the url into an int for SQL.
  const id: number = parseInt(req.params.id);
  //second arg is any of the values you are passing into the query, has to be an array.
  pool.query(queries.getMaterialsById, [id], (error: any, results: any) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  }) 
}

const addMaterial = (req: any, res: any) => {
  const { name, unit_cost } = req.body;

  //preventing duplicate adding, checking if material exists. Variable that we pass into the SQL query is in the array argument.
  pool.query(queries.checkMaterialExists, [name], (error: any, results: any) => {
    if (error) res.send(error);
    if (results.rows.length) {
      res.send("Material already exists.")
    }
    pool.query(queries.addMaterial, [name, unit_cost], (error: any, results: any) => {
      if (error) throw (error);
      res.status(201).send("Material added successfully!")
    })
  })
  
}

const deleteMaterial = (req: any, res: any) => {
  const id  = parseInt(req.params.id);
  pool.query(queries.getMaterialsById, [id], (error: any, results: any) => {
    const noMaterialFound = !results.rows.length;
    if (error) throw error;
    if (noMaterialFound) {
      res.send("Material doesn't exist in database.")
    }
    pool.query(queries.deleteMaterial, [id], (error: any, results: any) => {
      if (error) throw error;
      res.status(200).send("Material deleted successfully.")
    })
  })
}

const updateMaterialName = (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getMaterialsById, [id], (error: any, results: any) => {
    const noMaterialFound = !results.rows.length;
    if (error) throw error;
    if (noMaterialFound) {
      res.send("Material doesn't exist in database.")
    }
    pool.query(queries.updateMaterialName, [name, id], (error: any, results: any) => {
      if (error) throw error;
      res.status(200).send("Material updated successfully.");
    })
  })
}

export default {
  getMaterials,
  getMaterialsById,
  addMaterial,
  deleteMaterial,
  updateMaterialName,
}