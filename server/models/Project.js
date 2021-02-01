const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageSchema = require('./Image');

const projectSchema = new Schema({
    title: String,
    description: String,
    algorithm: String,
    images: [ImageSchema],
    // thumbnail: 
    // discussions: 
});

mongoose.model('projects', projectSchema);