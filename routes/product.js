'use strict';

const express = require('express');
const router = express.Router();
const productModel = require('../lib/models/products/products.collection');

router.get('/products', getproductHandler);
router.get('/products/:id', getOneproductHandler);
router.post('/products', createproductHandler);
router.put('/products/:id',updateproductHandler);
router.patch('/products/:id',updateproductHandler);

router.delete('/products/:id', deleteproductHandler);


function getproductHandler(req, res, next) {
  productModel
    .read()
    .then((data) => {
      res.status(302).json(data);
    })
    .catch(next);
}
function getOneproductHandler(req, res, next) {
    console.log(req.params.id)
  productModel
    .read(req.params.id,undefined)
    .then((data) => {
        console.log(data)
      res.status(302).json(data);
    })
    .catch(next);
}

function createproductHandler(req, res, next) {
  productModel
    .create(req.body)
    .then((data) => {
    res.status(201).json(data);
    })
    .catch(next);
}
function updateproductHandler(req, res, next) {
    productModel
      .update(req.params.id,req.body)
      .then((data) => {
      res.status(201).json(data);
      })
      .catch(next);
  }
function deleteproductHandler(req, res, next) {
    productModel
      .delete(req.params.id)
      .then((data) => {
      res.status(202).json(data);
      })
      .catch(next);
  }
module.exports = router;