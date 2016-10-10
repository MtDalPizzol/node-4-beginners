const express = require('express');
const ejs = require('ejs');
const stormtroopers = require('./features/stormtroopers/stormtroopers-router');
const home = require('./features/home/home-router');

var app = express();

// Setup views root directory
app.set('views', '.');
// Setupe views format to .html
app.set('view engine', 'html');
// Setup EJS as the engine for rendering .html
app.engine('html', ejs.renderFile);

// Serve bootstrap static files
app.use(express.static('node_modules/materialize-css/dist'));
app.use(express.static('layouts'));
app.use(express.static('public'));

// Setup app features
app.use(stormtroopers);
app.use(home);

// Lift the server
app.listen(8081, function() {
  console.log('Death Star listening on port 8081! Muahaha!');
});
