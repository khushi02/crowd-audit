const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models');

const app = express();

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
    keys.mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/', (req, res) => res.send('<h2>Hello from the server!</h2>'));
require('./routes/projectRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);