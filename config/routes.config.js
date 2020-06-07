const {
  UserController,
  ProjectController,
  TaskController,
} = require("./../controllers");

const routes = (api) => {
  console.log(`:::ROUTES UP:::`);
  // GET requests
  api.get("/user", (req, res) => UserController.one(req, res));
  api.get("/users", (req, res) => UserController.all(req, res));
  api.get("/project", (req, res) => ProjectController.one(req, res));
  api.get("/projects", (req, res) => ProjectController.all(req, res));
  // POST requests
  api.post("/login", (req, res) => UserController.login(req, res));
  api.post("/user", (req, res) => UserController.new(req, res));
  api.post("/project", (req, res) => ProjectController.new(req, res));
  api.post("/task", (req, res) => TaskController.new(req, res));
};
module.exports = routes;
