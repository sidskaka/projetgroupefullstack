const bcrypt = require('bcrypt');
const Product = require('../models/product.model')

// obtenir toutes les product
exports.findAll = (req, res) => {
    Product.find()
    .then(product => {
        res.send(product);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur sur la recherche"
        })
    })
}

// créer un nouveau product
exports.create = (req, res) => {
    const product = new Product({
        Product: req.body.Product
    })

    product.save()
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

    Product.findById(req.params.id)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product inconnu !"
            });
        }
        res.send(product)
    })
    .catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// modifier un product
exports.updateOne = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product inconnu !"
            })
        }
        //res.send(user)
        Product.findById(req.params.id)
        .then(newBu => {
            res.send({
                new_Bu: newBu,
                old_Bu: product
            });
        })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

// supprimer un product
exports.deleteOne = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product inconnu !"
            })
        }
        res.send({
            message: `Product avec identifiant ${req.params.id} supprimé avec succès`
        })
    })
}

// supprimer tous les product
exports.removeAll = (req, res) => {
    Product.deleteMany(err => {
        if(err) {
            res.send(err)
        }
        res.send("Tous les product supprimés avec succès")
    })
}