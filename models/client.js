const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phonenumber: { type: String },
    reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservations' }] // dicen que es a user
});

module.exports = mongoose.model('Client', clientSchema);