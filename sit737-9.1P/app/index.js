const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:27017`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('MongoDB connection is successful!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
