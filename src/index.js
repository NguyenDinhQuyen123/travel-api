const express = require('express');  
const mongoose = require('mongoose');  
// const dotenv = require('dotenv');
const cors = require('cors');  
const userRoutes = require('./routes/userRoutes');  
const tourRoutes = require('./routes/tourRoutes');  
const Tour = require('./models/Tour');  
const { faker } = require('@faker-js/faker'); // Sử dụng @faker-js/faker  



// Load environment variables  
require('dotenv').config();  

// Connect to MongoDB

const app = express();  
const PORT = process.env.PORT || 5000;  

app.use(cors());  
app.use(express.json());
// console.log("MongoDB URI:", process.env.MONGODB_URI);

const ConnectToMongoDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://nguyendinhquyen:nS7RPbIE4yCJNAaN@quyen.0ukw4.mongodb.net/travel-db?retryWrites=true&w=majority&appName=quyen" || process.env.MONGODB_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error to connect to MongoDB", error.message);
        process.exit(1);
    }
}

ConnectToMongoDB();

app.use('/api/users', userRoutes);  
app.use('/api/tours', tourRoutes);  

app.listen(PORT, () => {  
    console.log(`Server running on http://localhost:${PORT}`);  
});