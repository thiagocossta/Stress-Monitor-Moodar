const mongoose = require ('mongoose');

const StressSchema = new mongoose.Schema({
    status: Number,
    date: Date,
    description: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('Stress', StressSchema);