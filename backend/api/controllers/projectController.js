const Project = require("../models/Project");

class ProjectController {
  getProject(req, res, next) {
    Project.find({ language: req.query.lang })
      .then((project) => {
        res.json(project);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  }
}
module.exports = new ProjectController();
