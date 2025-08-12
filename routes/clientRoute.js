const express = require('express');
const clientSchema = require('../models/client');

const router = express.Router();

// Crear un cliente y ligarlo a un usuario
router.post('/client', (req, res) => {
    const client = clientSchema(req.body);
    console.log(req.body);
    client
     .save()
     .then((data) => res.json(data))
     .catch(error => res.status(400).json({ message: error }));
});

//obtener usuarios
router.get('/client', (req, res) => {
    userSchema
     .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//obtener un usuario
router.get('/client/:id', (req, res) => {
    const{ id } =req.params;
    userSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//actualizar usuario
router.put('/client/:id', (req, res) => {
    const{ id } =req.params;
    const { name, age, email, company, phone } = req.body;
    userSchema
     .updateOne({ _id: id }, { $set: {name, age, email, company, phone} })
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//eliminar usuario
router.delete('/client/:id', (req, res) => {
    const{ id } =req.params;
    userSchema
     .findByIdAndDelete({ _id: id })
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});
module.exports = router;