const { User } = require("./../models");
const { AuthUtil } = require('./../utils');
const UserController = {
  new: async (req, res) => {
    try {
      const newUser = await User.create(req.body);
      console.log(`:::NEW USER CREATED SUCCESSFULLY => ${newUser.username}:::`);
      return res.status(200).json(newUser);
    } catch (err) {
      console.log(`:::ERROR CREATING USER => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
  login: async(req, res) => {
    try {
        const foundUser = await User.findOne({ email: req.body.email }).populate('projects');
        const check = AuthUtil.comp(req.body.password, foundUser.password);
        if(check) {
            return res.status(200).json(foundUser);
        } else {
            return res.status(401).json({ message: 'Incorrect username and/or password'});
        }
    } catch(err) {
        console.log(`:::ERROR LOGGING IN ${err}:::`);
        return res.status(401).json({ message: 'Incorrect username and/or password' });
    }
},
  one: async (req, res) => {
    try {
      const foundUser = await User.findOne({ _id: req.query._id }).populate("projects");
      console.log(`:::USER HAS BEEN FOUND => ${foundUser.username}:::`);
      return res.status(200).json(foundUser);
    } catch (err) {
      console.log(`:::ERROR RETRIEVING USER => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
  all: async (req, res) => {
    try {
      const allUsers = await User.find().populate("projects");
      console.log(`:::${allUsers.length} USERS RETRIEVED:::`);
      return res.status(200).json(allUsers);
    } catch (err) {
      console.log(`:::ERROR RECOVERING USERS => ${err}:::`);
      return res.status(500).json({ message: err });
    }
  },
};
module.exports = UserController;
