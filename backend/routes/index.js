const ProfileController = require("../api/controllers/profileController");
const path = require("path");
const ProjectController = require("../api/controllers/projectController");
function route(app) {
  app.get("/profile", ProfileController.getProfile);
  app.get("/", (req, res) => {
    res.send("Hello");
  });
  app.get("/project", ProjectController.getProject);
  app.get("/download", (req, res) => {
    const file = path.join(__dirname, "..", "public", "test.jpg");
    res.download(file);
  });
}
module.exports = route;
