const express = require('express');  
const { getAllTours, addTour } = require('../controllers/tourController');  
const router = express.Router();  

router.get('/', getAllTours);  
router.post('/', addTour);  

module.exports = router;