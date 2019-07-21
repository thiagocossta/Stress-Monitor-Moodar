const mongoose = require ('mongoose');

const StressSchema = new mongoose.Schema({
    status: Number, 
    date: {type: Date, unique: true},
    description: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Stress', StressSchema);