'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const timeMiddleware = require('../midelware/timestamp.js');
const loggerMiddleware = require('../midelware/logger.js');
const errorHandler = require('../midelware/500.js');
const notFoundHandler = require('../midelware/404.js');
const allRouter = require('../routes/allroute.js');



app.use(morgan('dev'));
app.use(cors());
require('dotenv').config()
app.use(express.json());
app.use(timeMiddleware);
app.use(loggerMiddleware);


app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/v1/', allRouter);
;

// app.use('api/v1/', userRouter);
app.get('/bad', (req, res) => {
  throw new Error('a test error');
});



app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      const PORT = port || process.env.PORT || 5000;
      console.log(`up and running on port ${PORT}`);
    });
  },
};
