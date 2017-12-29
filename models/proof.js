const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proofSchema = new Schema ({

    brand: String,
    color: String,
    quantity: Number,
    description: String,
    perUnitCost: Number,
    totalCost: Number,
    localPickup: Boolean,
    dateOrdered: { type: Date, default: Date.now},

});

const Proof = mongoose.model('proof', proofSchema)

module.exports = Proof;