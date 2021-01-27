const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeSchema = new Schema({
    Prenom: {
        type: String,
        required: true,
        lowercase: true
    },
    Nom: {
        type: String,
        required: true,
        lowercase: true
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
    },
    Responsable: {
        type: Schema.Types.ObjectId, ref: 'Responsable',
        required: true
    },
    Experience: {
        type: Number,
        required: true
    },
    CJM : { //cout journalier moyen
        type: Number,
        required: true
    },
    Declaration: { //date d'annonce de l'intercontrat
        type: String,
        required: true
    },
    // CV: {
    //     type: File,
    //     required: true
    // },
    DIntercontrat: { //début de l'intercontrat
        type: String
    },
    AEmploi: { //ancien emploi
        type: String,
        required: true
    },
    AIntercontrat: { //ancien intercontrat
        type: String
    },
    DuIntercontrat : { //durée intercontrat
        type: Number
    },
    Profil : { //Type de compétence
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Employe = mongoose.model('Employe', employeSchema);

module.exports = Employe;