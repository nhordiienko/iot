const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./app/routes');

const PORT = process.env.PORT || 3000;

express()
  .use(morgan('dev'))
  .use('/', routes)
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));

