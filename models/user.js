const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'El correo electrónico es obligatorio.'],
        unique: true,
        trim: true,
        lowercase: true, // Buena práctica para emails
        match: [/.+\@.+\..+/, 'Por favor, introduce un correo electrónico válido.'] // Validación básica de formato
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria.'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres.'] // Validación de longitud mínima
    },
    role: {
        type: String,
        enum: ['platformAdmin', 'businessOwner', 'businessStaff'],
        default: 'businessOwner'
    },
    businessId: { // Para vincular con el negocio
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business', // Hace referencia al futuro modelo 'Business'
        // 'required' dependerá de la lógica: ¿Un 'businessOwner' se crea siempre con un 'businessId'? Probablemente sí.
        // Para 'platformAdmin', este campo sería null.
    },
    isActive: {
        type: Boolean,
        default: true
    },
    fingerprintData: {
        type: Object
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
