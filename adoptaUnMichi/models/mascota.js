const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre de la mascota es obligatorio']
    },

    edad: {
        type: String,
        required: [true, 'la edad de la mascota es obigatoria']
    },

    clase: {
        type: String,
        required: [true, 'la clase del animal es obligatoria']
    },
    adoptado:{
        type: String,
        required: [true, 'Se debe saber si la mascota fue adoptada o no']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model("Mascota", MascotaSchema);