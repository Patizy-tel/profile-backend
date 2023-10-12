const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
// @ts-ignore
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});