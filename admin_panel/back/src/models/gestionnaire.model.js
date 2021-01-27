const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gestionnaireSchema = new Schema({
    gestionnaireID: {
        type: String,
        required: true,
        unique: true
    },
    gestionnaireName: {
        type: String,
        required: true,
        lowercase: true
    },
    gestionnaireMail: {
        type: String,
        unique: true,
        require: true
    },
    gestionnaireTelephone: {
        type: String,
        unique: true
    },
    gestionnaireAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

const Gestionnaire = mongoose.model('Gestionnaire', gestionnaireSchema);

module.exports = Gestionnaire;