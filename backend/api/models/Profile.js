const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = new Schema(
  {
    desctiption: String,
    education: Array,
    email: String,
    experience: Array,
    name: String,
    skills: Array,
    socialmedia: Object,
    language: String,
    phone: String,
    job: String,
    image: Object,
    // "description": "Tôi là Full-Stack developer",
    // "education": [
    //   {
    //     "time": "2019-2022",
    //     "school": "University of Information Technology",
    //     "certificate": "bachlor of technology",
    //     "about": "i''m so happy"
    //   }
    // ],
    // "email": "tnhut803@gmail.com",
    // "experience": [
    //   {
    //     "start": {
    //       "$date": {
    //         "$numberLong": "977961600000"
    //       }
    //     },
    //     "end": {
    //       "$date": {
    //         "$numberLong": "977961600000"
    //       }
    //     },
    //     "position": "fresher",
    //     "company": "UIT"
    //   }
    // ],
    // "name": "Trần Nhựt",
    // "skills": [
    //   "Html",
    //   "Css",
    //   "JavaScript"
    // ],
    // "social media": {
    //   "facebook": "https://www.facebook.com/Tnhut813",
    //   "git": "https://github.com/nhutpro"
    // },
    // "language": "VI"
  },
  { collection: "profile" }
);
module.exports = mongoose.model("Profile", Profile);
