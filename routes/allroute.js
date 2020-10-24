'use strict';

const express = require('express');
const router = express.Router();
const categoryModel = require('../lib/models/categories/categories.collection');
const productModel = require('../lib/models/products/products.collection');


router.param('model', getModel);


router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', createHandler);
router.put('/:model/:id',updateHandler);
router.patch('/:model/:id',updateHandler);

router.delete('/:model/:id', deleteHandler);

function getModel(req, res, next) {
  const model = req.params.model;
  console.log('__MODEL__', model);
  switch (model) {
    case 'categories':
      req.model = categoryModel;
      break;
    case 'products':
      req.model = productModel;
      break;
    default:
      throw new Error('Invalid Model');
  }
  next();
  
}

function  getAllHandler(req, res, next) {
     req.model 
    .read()
    .then((data) => {
      res.status(302).json(data);
    })
    .catch(next);
}
function getOneHandler(req, res, next) {
    console.log(req.params.id)
     req.model 
    .read(req.params.id,undefined)
    .then((data) => {
        console.log(data)
      res.status(302).json(data);
    })
    .catch(next);
}

function createHandler(req, res, next) {
     req.model 
    .create(req.body)
    .then((data) => {
    res.status(201).json(data);
    })
    .catch(next);
}
function updateHandler(req, res, next) {
       req.model 
      .update(req.params.id,req.body)
      .then((data) => {
        console.log("c",data)
      res.status(201).json(data);
      })
      .catch(next);
  }
function deleteHandler(req, res, next) {
       req.model 
      .delete(req.params.id)
      .then((data) => {
      res.status(202).json(data);
      })
      .catch(next);
  }
module.exports = router;