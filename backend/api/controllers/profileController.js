const Profile = require("../models/Profile");

class ProfileController {
  getProfile(req, res, next) {
    console.log(req.query);
    Profile.findOne({ language: req.query.lang })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log("erro");
      });
  }
}
module.exports = new ProfileController();
