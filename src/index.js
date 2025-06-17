const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routesUser = require('../routes/userRoutes');
const clientRoutes = require('../routes/client');

//ejecutar express
const app = express();
//puerto
const port = process.env.PORT || 9000;

//convertir a json
app.use(express.json());
//middlewares
app.use('/api', routesUser);
app.use('/api', clientRoutes);

//routes
app.get('/', (req,res) => {
    res.send("Welcome to my API")
})

//mongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log('Server running on port', port));
