const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./db');
const cors = require("cors");
const profileRoutes = require('./routes/profileRoutes');
const memberRoutes = require('./routes/memberRoutes')

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api', profileRoutes);
app.use('/api', memberRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});