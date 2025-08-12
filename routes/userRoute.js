const express = require("express");
const userSchema = require('../models/user');

const router = express.Router();

//ceate user
router.post('/user', (req, res) => {
    const user = userSchema(req.body);
    console.log(req.body);
    user
     .save()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//obtener usuarios
router.get('/user', (req, res) => {
    userSchema
     .find()
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//obtener un usuario
router.get('/user/:id', (req, res) => {
    const{ id } =req.params;
    userSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//actualizar usuario
router.put('/user/:id', (req, res) => {
    const{ id } =req.params;
    const { name, age, email, company, phone } = req.body;
    userSchema
     .updateOne({ _id: id }, { $set: {name, age, email, company, phone} })
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});

//eliminar usuario
router.delete('/user/:id', (req, res) => {
    const{ id } =req.params;
    userSchema
     .findByIdAndDelete({ _id: id })
     .then((data) => res.json(data))
     .catch((error) => res.json({message: error}));
});
module.exports = router;