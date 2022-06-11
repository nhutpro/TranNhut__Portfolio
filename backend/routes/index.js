const ProfileController = require("../api/controllers/profileController");
const path = require("path");
const ProjectController = require("../api/controllers/projectController");
const ContactController = require("../api/controllers/contactController");
function route(app) {
  app.post("/api/contact", ContactController.saveContact);
  app.get("/api/profile", ProfileController.getProfile);
  app.get("/api", (req, res) => {
    res.send("Hello Api");
  });
  app.get("/api/project", ProjectController.getProject);
  app.get("/api/download", (req, res) => {
    const file = path.join(
      __dirname,
      "..",
      "public",
      "CV_TranNhut_Full-Stack.pdf"
    );
    res.download(file);
  });
}
module.exports = route;
