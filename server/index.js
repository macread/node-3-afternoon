require ('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')

const {SERVER_PORT, SESSION_SECRET} = process.env;

// Middleware
const checkForSession = require('./middlewares/checkForSession');


// Controllers
const swag_controller = require('./controllers/swag_controller.js');

const app = express();

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(checkForSession);

app.get('/api/swag', swag_controller.read )

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})