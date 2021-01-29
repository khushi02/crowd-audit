const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('<h2>Hello from the server!</h2>'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
