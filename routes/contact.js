const express = require('express');
const router = express.Router();
const {submitForm} = require('../controllers/contact');

router.post('/contact', submitForm);
router.get('/', (req,res) =>{
    res.send("success")
});

module.exports = router;