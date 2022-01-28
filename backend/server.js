const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
require('./connection');
const userRoutes = require('./routes/userRoutes');
app.use(cors());

app.use(express.json());

app.use('/users', userRoutes);

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
