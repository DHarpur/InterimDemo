const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);

app.use(cors())

app.use(express.static(path.join(__dirname, 'build')));

app.post('/users', db.createUser);

app.get('/users/:username', db.getUserByUsername);

app.get('/users', db.getUsers);


app.listen(port, ()=> {
    console.log(`App running on port ${port}.`);
});