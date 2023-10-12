const express = require('express');
const multer = require('multer');
const profileController = require('../controllers/profileController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/profiles', profileController.createProfile);
router.get('/profiles', profileController.getProfiles);

module.exports = router;