'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const timeMiddleware = require('../midelware/timestamp.js');
const loggerMiddleware = require('../midelware/logger.js');
const errorHandler = require('../midelware/500.js');
const notFoundHandler = require('../midelware/404.js');
const categoryRouter = require('../routes/categories.js');
const prouductyRouter = require('../routes/product.js');

// const userRouter = require('.);

app.use(morgan('dev'));
app.use(cors());
require('dotenv').config()
app.use(express.json());
app.use(timeMiddleware);
app.use(loggerMiddleware);


app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/v1/', categoryRouter);
app.use('/api/v1/', prouductyRouter);

// app.use('api/v1/', userRouter);
app.get('/bad', (req, res) => {
  throw new Error('a test error');
});

// api/v1
// "display_name": "hates",
//       "description": "red color",
// let db = [{categories:[],products:[]}]

// app.post('/api/v1/products', (req, res) => {
//     console.log(req.body)
//   const { name,category,description } = req.body;
//   const record = { name,category,description };
//   record.id = db[0].products.length + 1;
//   db[0].products.push(record);
//   res.status(201).json(record);
// });

// app.get('/api/v1/products', (req, res) => {
//   const count = db[0].products.length;
//   const results = db[0];
//   res.status(200).json({ count, results });
// });
// app.get('/api/v1/products/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(id, db);

//   const records = db[0].products.filter((record) => record.id === parseInt(id));

//   console.log(records);
//   res.status(302).json(records[0]);
// });
// app.put('/api/v1/products/:id', (req, res) => {
// const id= req.params.id
// const records = db[0].products.filter((record) => record.id === parseInt(id));
// // const {name}=req.body.name
// console.log(req.body.name)
// records[0].name=req.body.name
// records[0].category=req.body.category
// records[0].description=req.body.description

// console.log(records[0].name)

// res.status(200).json(records[0]);

// })
// app.delete('/api/v1/products/:id', (req, res) => {
//     const id= req.params.id
// for (let index = 0; index < db[0].products.length; index++) {
//    if (db[0].products[index].id=== parseInt(id)) {
//     if (index > -1) {
//       db[0].products.splice(index, 1);
//     }
//    }
    
// }
//     res.status(202).json(db[0].products);
    
//     });
//     // display_name": "hates",
//     // "description"


//     app.post('/api/v1/categories', (req, res) => {
//         console.log(req.body)
//       const { name,display_name,description } = req.body;
//       const record = { name,display_name,description  };
//       record.id = db[0].categories.length + 1;
//       db[0].categories.push(record);
//       res.status(201).json(record);
//     });
    
//     app.get('/api/v1/categories', (req, res) => {
//       const count = db[0].categories.length;
//       const results = db[0];
//       res.status(200).json({ count, results });
//     });
//     app.get('/api/v1/categories/:id', (req, res) => {
//       const id = req.params.id;
//       console.log(id, db);
    
//       const records = db[0].categories.filter((record) => record.id === parseInt(id));
    
//       console.log(records);
//       res.status(302).json(records[0]);
//     });
//     app.put('/api/v1/categories/:id', (req, res) => {
//     const id= req.params.id
//     const records = db[0].categories.filter((record) => record.id === parseInt(id));
//     // const {name}=req.body.name
//     console.log(req.body.name)
//     records[0].name=req.body.name
//     records[0].display_name=req.body.display_name
//     records[0].description=req.body.description

//     console.log(records[0].name)
    
//     res.status(200).json(records[0]);
    
//     })
//     app.delete('/api/v1/categories/:id', (req, res) => {
//         const id= req.params.id
//     for (let index = 0; index < db[0].categories.length; index++) {
//        if (db[0].categories[index].id=== parseInt(id)) {
//         if (index > -1) {
//           (db[0].categories).splice(index, 1);
//         }
//        }
        
//     }
//         res.status(202).json(db[0].categories);
        
//         });
    


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
