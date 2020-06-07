// require all controllers
const UserController = require('./user.controller');
const ProjectController = require('./project.controller');
const TaskController = require('./task.controller');
// wrap up controllers in an object for export
const controllers = {
    UserController,
    ProjectController,
    TaskController
};
// export controllers
module.exports = controllers;