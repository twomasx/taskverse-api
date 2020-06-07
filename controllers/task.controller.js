const { Task, Project } = require('./../models');
const TaskController = {
    new: async (req, res) => {
        try {
            const newTask = await Task.create(req.body);
            const foundProject = await Project.findOne({ _id: req.body.project_id });
            foundProject.tasks.push(newTask._id);
            await foundProject.save();
            console.log(`:::TASK SUCCESSFULLY CREATED => ${newTask.title}:::`);
            return res.status(200).json(newTask);
        } catch(err) {
            console.log(`:::ERROR CREATING TASK => ${err}:::`);
            return res.status(500).json({ message: err });
        }
    }
};
module.exports = TaskController;