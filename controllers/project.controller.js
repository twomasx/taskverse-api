const { Project, User } = require("./../models");
const ProjectController = {
  new: async (req, res) => {
    try {
      const newProject = await Project.create(req.body);
      const foundUser = await User.findOne({ _id: req.body.user_id });
      foundUser.projects.push(newProject._id);
      await foundUser.save();
      console.log(`:::NEW PROJECT CREATED => ${newProject.title}:::`);
      return res.status(200).json(newProject);
    } catch (err) {
      console.log(`:::ERROR CREATING PROJECT => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
  one: async (req, res) => {
    try {
      const foundProject = await Project.findOne({
        _id: req.query._id,
      }).populate("tasks");
      console.log(`:::PROJECT FOUND => ${foundProject.title}:::`);
      return res.status(200).json(foundProject);
    } catch (err) {
      console.log(`:::ERROR FINDING PROJECT => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
  all: async (req, res) => {
    try {
      const allProjects = await Project.find().populate("tasks");
      console.log(`:::${allProjects.length} PROJECTS FOUND:::`);
      return res.status(200).json(allProjects);
    } catch (err) {
      console.log(`:::ERROR FINDING PROJECTS => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
};
module.exports = ProjectController;
