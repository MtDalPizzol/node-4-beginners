const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const socketIo = require('socket.io');
const stormtroopers = require('./features/stormtroopers/stormtroopers-router');
const home = require('./features/home/home-router');

var app = express();
var server = http.Server(app);
var io = socketIo(server);

// Serve static files
app.use('/js', express.static('node_modules/socket.io/node_modules/socket.io-client'));
app.use(express.static('node_modules/materialize-css/dist'));
app.use(express.static('layouts'));
app.use(express.static('public'));

// Setup views root directory
app.set('views', '.');
// Setupe views format to .html
app.set('view engine', 'html');
// Setup EJS as the engine for rendering .html
app.engine('html', ejs.renderFile);

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Setup app features
app.use(stormtroopers(io));
app.use(home);

// Send a not welcome message to unauthorized stormtroopers
io.on('connection', function (socket) {
  socket.emit('notification', {
    status: 'light-blue',
    title: 'Welcome at the Dark Side of the force!',
    message: 'Are you an authorized stormtrooper? I really hope you are, cuz you don\'t wanna mess with me, motherfucker!'
  });
});

// Lift the server
server.listen(8081, function() {
  console.log('Death Star listening on port 8081! Muahaha!');
});
