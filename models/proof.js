const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const proofSchema = new Schema ({

})

const Proof = mongoose.model('proof', proofSchema)

module.exports = Proof;