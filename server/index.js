require ('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')

const {SERVER_PORT, SESSION_SECRET} = process.env;
// const mid = require('./middleware')
const app = express();

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})