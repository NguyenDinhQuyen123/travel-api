const mongoose = require('mongoose');  

const tourSchema = new mongoose.Schema({  
    title: { type: String, required: true },  
    description: { type: String, required: true },  
    price: { type: Number, required: true },  
    duration: { type: String, required: true },  
    imageUrl: { type: String },  
}, { timestamps: true });  

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;