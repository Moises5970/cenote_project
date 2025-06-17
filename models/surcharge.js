const mongoose = require('mongoose');

const RecargoSchema = new mongoose.Schema({
    reserva: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservations', required: true },
    motivo: { type: String, required: true },
    monto: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('surcharge', RecargoSchema);