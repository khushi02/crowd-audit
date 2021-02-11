const mongoose = require('mongoose');
const Project = mongoose.model('projects');

module.exports = app => {
    app.get('/api/projects', async (req, res) => {
        const projects = await Project.find({});
        res.send(projects);
    });
};