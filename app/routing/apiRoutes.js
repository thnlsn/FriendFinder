const express = require('express');
const path = require('path');
const app = express();

//gets list of all friends
const apiRoutes = app.get('/api/friends', (req, res) => res.json(friends));

module.exports = apiRoutes;