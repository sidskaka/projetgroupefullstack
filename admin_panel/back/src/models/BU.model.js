const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BUSchema = new Schema({
    BU: { //Buisness unit
        type: String,
        required: true,
        unique: true
    },
},{
    timestamps: true
});

const BU = mongoose.model('BU', BUSchema);

module.exports = BU;