const express = require('express');
const router = express.Router();
const zipCodeService = require('../services/zipcodeService');

router.get('/:id', async function(req, res, next){
    try{
        const rows = await zipCodeService.getLocationInformation(req.params.id);
        if(rows.length == 0){
            res.sendStatus(404);
        }
        else{
            res.json(await zipCodeService.getLocationInformation(req.params.id));
        }
    }
  
    catch(err){
        console.error(`Error while retrieving location information for ${req.params.id}`, err.message);
        next(err);
    }
});

module.exports = router;