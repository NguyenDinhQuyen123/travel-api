const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;