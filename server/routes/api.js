const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    res.send('la api funciona');
});

module.exports = router;