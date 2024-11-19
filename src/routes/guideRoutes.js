const {getAllGuides} = require('../controllers/guideController');

const express = require('express');
const router = express.Router();

router.get('/', getAllGuides);

module.exports = router;

  