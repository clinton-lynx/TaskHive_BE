const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contact');

router.post('/contact', contactsController.submitForm);
router.get('/', (req,res) =>{
    res.send("success")
});

module.exports = router;