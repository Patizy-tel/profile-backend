const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db');
const profileRoutes = require('./routes/profileRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', profileRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});