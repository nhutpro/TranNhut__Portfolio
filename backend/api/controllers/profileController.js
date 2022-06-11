const Profile = require("../models/Profile");

class ProfileController {
  getProfile(req, res, next) {
    Profile.findOne({ language: req.query.lang })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(401).json(err);
      });
  }
}
module.exports = new ProfileController();
