const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
    descripcion: { type: String, required: true },
    peso: { type: Number },
    bultos: { type: Number },
    fecha_entrega: { type: Date },
    nombre: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    referencia: { type: String },
    observacion: { type: String },
    costo: { type: Number }
});

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    credito_envios: { type: Number, required: true },
    plan: { type: String, required: true },
    envios: [envioSchema]
});

module.exports = mongoose.model('Cliente', clienteSchema);
