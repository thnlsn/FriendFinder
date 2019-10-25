const express = require('express');
const path = require('path');
const app = express();

const htmlRoutes = app.use(express.static(path.join(__dirname, '/app/public')));

module.exports = htmlRoutes;