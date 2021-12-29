const express = require('express');
const materialsRoutes = require('./src/materials/routes')
const app = express();
const port = 3000;

//Allows us to GET and POST JSON from endpoints.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

//Route that leads to the materials routes.
//Arg one is the string to use as the url, arg two is the pathing from routes.js.
app.use('/api/v1/materials', materialsRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})