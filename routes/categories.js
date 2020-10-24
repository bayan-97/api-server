'use strict';

const express = require('express');
const router = express.Router();
const categoryModel = require('../lib/models/categories/categories.collection');

router.get('/categories', getcategoryHandler);
router.get('/categories/:id', getOnecategoryHandler);
router.post('/categories', createcategoryHandler);
router.put('/categories/:id',updatecategoryHandler);
router.patch('/categories/:id',updatecategoryHandler);

router.delete('/categories/:id', deletecategoryHandler);


function getcategoryHandler(req, res, next) {
  categoryModel
    .read()
    .then((data) => {
      res.status(302).json(data);
    })
    .catch(next);
}
function getOnecategoryHandler(req, res, next) {
    console.log(req.params.id)
  categoryModel
    .read(req.params.id,undefined)
    .then((data) => {
        console.log(data)
      res.status(302).json(data);
    })
    .catch(next);
}

function createcategoryHandler(req, res, next) {
  categoryModel
    .create(req.body)
    .then((data) => {
    res.status(201).json(data);
    })
    .catch(next);
}
function updatecategoryHandler(req, res, next) {
    categoryModel
      .update(req.params.id,req.body)
      .then((data) => {
        console.log("c",data)
      res.status(201).json(data);
      })
      .catch(next);
  }
function deletecategoryHandler(req, res, next) {
    categoryModel
      .delete(req.params.id)
      .then((data) => {
      res.status(202).json(data);
      })
      .catch(next);
  }
module.exports = router;