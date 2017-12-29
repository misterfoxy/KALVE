const jwt = require("jwt-simple");
const config = require("../config.js");
const Proof = require("../models/proof.js")

exports.submitProof = function(req, res, next){
    console.log(req);
    
    const brand = req.body.brand;
    const color = req.body.color;
    const quantity = req.body.quantity;
    const description = req.body.description;
    const perUnitCost = req.body.perUnitCost;
    const totalCost = req.body.totalCost;
    const localPickup = req.body.localPickup

    const proof = new Proof({
        brand: brand,
        color: color,
        quantity: quantity,
        description: description,
        perUnitCost: perUnitCost,
        totalCost: totalCost,
        localPickup: localPickup
    });

    proof.save(function(err){
        if(err) { return next(err);}
    })
    res.json({success: true})
};