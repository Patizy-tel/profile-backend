const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();


router.post('/profiles', profileController.createProfile);
router.get('/profiles', profileController.getProfiles);

module.exports = router;