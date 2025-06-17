const express = require('express');
const Cliente = require('../models/client');

const router = express.Router();

// Crear un cliente y ligarlo a un usuario
router.post('/client', (req, res) => {
    const { name, email, phonenumber, userID } = req.body;

    const cliente = new Cliente({
        name,
        email,
        phonenumber,
        usuario: userID // <- lo ligas al usuario
    });

    cliente.save()
        .then(data => res.json(data))
        .catch(error => res.status(400).json({ message: error }));
});
