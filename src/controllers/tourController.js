const Tour = require('../models/Tour');  

exports.getAllTours = async (req, res) => {  
    const tours = await Tour.find();  
    res.json(tours);  
};  

exports.addTour = async (req, res) => {  
    const { title, description, price, duration, imageUrl } = req.body;  

    const newTour = new Tour({ title, description, price, duration, imageUrl });  
    await newTour.save();  
    res.status(201).json({ message: 'Tour created successfully' });  
};