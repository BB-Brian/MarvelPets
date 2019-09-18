// IMPORTS 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./server/routes');

// SETUP
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());
router(app);

// ROUTES
app.all('**', (req, res) => 
    res.sendFile(path.join(__dirname, 'public/dist/public/index.html')));

// LISTENING
app.listen(8000, function() {
    console.log('listening on port 8000');
});
