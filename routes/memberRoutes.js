const express = require('express');
const memberCOntroller = require('../controllers/membersController')

const router = express.Router();


router.post('/members',memberCOntroller.createMember);


module.exports = router;