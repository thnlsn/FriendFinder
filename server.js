const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5500;

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
};

app.use(logger);

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

require('./app/routing/htmlRoutes');
require('./app/routing/apiRoutes');

//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
















//웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟웃̟͟͟웃̟͟͟웃̟͟