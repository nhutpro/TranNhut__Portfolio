const Contact = require("../models/Contact");
class ContactController {
  saveContact(req, res, next) {
    Contact.create({ ...req.body })
      .then((data) => {
        res.status(200).json({ message: "success" });
      })
      .catch((err) => {
        res.status(404).json({ message: "fail" });
      });
  }
}
module.exports = new ContactController();
