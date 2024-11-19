// models/Guide.js  

const mongoose = require('mongoose');  

const guideSchema = new mongoose.Schema({  
  name: {  
    type: String,  
    required: true,  
  },  
  location: {  
    type: String,  
    required: true,  
  },  
  imageUrl: {  
    type: String,  
    required: true,  
  },  
  rating: {  
    type: Number,  
    required: true,  
  },  
  reviews: {  
    type: Number,  
    required: true,  
  },  
});  

const Guide = mongoose.model('Guide', guideSchema);  

module.exports = Guide;