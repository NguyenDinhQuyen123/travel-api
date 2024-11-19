const Guide = require('../models/Guide');

// Get all guides
exports.getAllGuides=async (req, res) => {  
    try {  
      const guides = await Guide.find();  
      res.json(guides);  
    } catch (error) {  
      res.status(500).json({ message: error.message });  
    }  
  }