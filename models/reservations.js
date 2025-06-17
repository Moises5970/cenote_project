const mongoose = require('mongoose');

const ReservationsSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    fecha: { type: Date, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    personas: { type: Number, required: true },
    estado: { type: String, enum: ['activa', 'cancelada', 'modificada'], default: 'activa' },
    recargos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recargo' }]
});

module.exports = mongoose.model('Reservations', ReservationsSchema);