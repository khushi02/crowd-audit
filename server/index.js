const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, err => console.error(err));

app.get('/', (req, res) => res.send('<h2>Hello from the server!</h2>'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
