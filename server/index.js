const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));
const port = process.env.SERVER_PORT;

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.newHouse);

app.listen(port, ()=>{
    console.log('Listening on port', port);
});