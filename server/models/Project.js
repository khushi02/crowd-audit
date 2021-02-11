const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageSchema = require('./Image');

const projectSchema = new Schema({
    title: String,
    description: String,
    thumbnail: Array,
    images: [ImageSchema],
    // thumbnail: 
    // discussions: 
});

mongoose.model('projects', projectSchema);