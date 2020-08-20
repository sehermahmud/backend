const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.get('/:pid', placesControllers.getProducts);

router.post(
  '/project',placesControllers.createProduct
);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;
