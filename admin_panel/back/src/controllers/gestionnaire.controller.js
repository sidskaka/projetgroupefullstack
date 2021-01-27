const bcrypt = require('bcrypt');
const Gestionnaire = require('../models/gestionnaire.model')

// obtenir tous les gestionnaire
exports.findAll = (req, res) => {
    Gestionnaire.find()
    .then(gestionnaire => {
        res.send(gestionnaire);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur sur la recherche"
        })
    })
}

// créer un nouveau gestionnaire
exports.create = (req, res) => {
    const gestionnaire = new Gestionnaire({
        gestionnaireID: req.body.gestionnaireID,
        gestionnaireName: req.body.gestionnaireName,
        gestionnaireMail: req.body.gestionnaireMail,
        gestionnaireTelephone: req.body.gestionnaireTelephone,
        gestionnaireAdmin: req.body.gestionnaireAdmin
    })

    gestionnaire.save()
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findOne = (req, res) => {
    //console.log(req.params);

    Gestionnaire.findById(req.params.id)
    .then(gestionnaire => {
        if(!gestionnaire) {
            return res.status(404).send({
                message: "Gestionnaire inconnu !"
            });
        }
        res.send(gestionnaire)
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// modifier un gestionnaire
exports.updateOne = (req, res) => {
    Gestionnaire.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(gestionnaire => {
        if(!gestionnaire) {
            return res.status(404).send({
                message: "Gestionnaire inconnu !"
            })
        }
        //res.send(user)
        Gestionnaire.findById(req.params.id)
        .then(newGestionnaire => {
            res.send({
                new_gestionnaire: newGestionnaire,
                old_gestionnaire: gestionnaire
            });
        })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// supprimer un gestionnaire
exports.deleteOne = (req, res) => {
    Gestionnaire.findByIdAndRemove(req.params.id)
    .then(gestionnaire => {
        if(!gestionnaire) {
            return res.status(404).send({
                message: "Gestionnaire inconnu !"
            })
        }
        res.send({
            message: `Gestionnaire avec identifiant ${req.params.id} supprimé avec succès`
        })
    })
}

// supprimer tous les gestionnaire
exports.removeAll = (req, res) => {
    Gestionnaire.deleteMany(err => {
        if(err) {
            res.send(err)
        }
        res.send("Tous les gestionnaire supprimés avec succès")
    })
}