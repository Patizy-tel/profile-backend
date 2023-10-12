const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_LOCAL_CONN_URL;
// @ts-ignore
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err);
});