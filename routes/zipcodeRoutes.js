const express = require('express');
const router = express.Router();
const zipCodeService = require('../services/zipcodeService');

router.get('/zipcodes/:id', async function(req, res, next){
    try{
        res.json(await zipCodeService.get(req.params.id));
    }
    catch(err){
        console.error(`Error while retrieving location information for ${req.params.id}`, err.message);
        next(err);
    }
});

module.exports = router;