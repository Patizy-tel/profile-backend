// controllers/profileController.js
const Profile = require('../models/profile');

// Create a new profile
exports.createProfile = (req, res) => {
  const { firstName, lastName, email, phoneNumber, description } = req.body;
  const file = req.file ? req.file.path : null;

  const profile = new Profile({
    firstName,
    lastName,
    email,
    phoneNumber,
    description,
    file,
  });

  profile.save()
    .then((savedProfile) => {
      res.json(savedProfile);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to create the profile' });
    });
};

// Get paginated profiles
exports.getProfiles = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  Profile.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .then((profiles) => {
      res.json(profiles);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to get profiles' });
    });
};