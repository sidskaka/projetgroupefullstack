const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responsableSchema = new Schema({
    Nom: {
        type: String,
        required: true,
    },
    Prenom: {
        type: String,
        required: true,
    },
    Adresse: {
        type: String,
        required: true,
        lowercase: true
    },
    Email: {
        type: String,
        required: true,
        lowercase: true
    },
    BU: { //Buisness unit
        type: Schema.Types.ObjectId, ref: 'BU',
        required: true
    }
},{
    timestamps: true
});

const Responsable = mongoose.model('Responsable', responsableSchema);

module.exports = Responsable;