const bcrypt = require('bcrypt');
const BU = require('../models/BU.model')

// obtenir toutes les Bu
exports.findAll = (req, res) => {
    BU.find()
    .then(Bu => {
        res.send(Bu);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur sur la recherche"
        })
    })
}

// créer un nouveau Bu
exports.create = (req, res) => {
    const Bu = new BU({
        BU: req.body.BU
    })

    Bu.save()
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

    BU.findById(req.params.id)
    .then(Bu => {
        if(!Bu) {
            return res.status(404).send({
                message: "BU inconnu !"
            });
        }
        res.send(Bu)
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// modifier un Bu
exports.updateOne = (req, res) => {
    BU.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(Bu => {
        if(!Bu) {
            return res.status(404).send({
                message: "BU inconnu !"
            })
        }
        //res.send(user)
        BU.findById(req.params.id)
        .then(newBu => {
            res.send({
                new_Bu: newBu,
                old_Bu: Bu
            });
        })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// supprimer un Bu
exports.deleteOne = (req, res) => {
    BU.findByIdAndRemove(req.params.id)
    .then(Bu => {
        if(!Bu) {
            return res.status(404).send({
                message: "BU inconnu !"
            })
        }
        res.send({
            message: `BU avec identifiant ${req.params.id} supprimé avec succès`
        })
    })
}

// supprimer tous les Bu
exports.removeAll = (req, res) => {
    BU.deleteMany(err => {
        if(err) {
            res.send(err)
        }
        res.send("Tous les Bu supprimés avec succès")
    })
}