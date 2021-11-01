const express = require("express");
const router = express.Router();

const { student } = require("../shared/db");

router.get("/", (req, res) => {
  res.send("get all Students");
});

router.post("/", async (req, res) => {
  console.log("Student create route");
  const data = await student.create({
    name: req.body.name,
    email: req.body.email,
    course: req.body.course,
    mentorAssigned: req.body.mentorAssigned,
  });
  res.send(data);
});

router.put("/", (req, res) => {
  res.send("Student edit route");
});

router.delete("/", (req, res) => {
  res.send("Student delete route");
});

module.exports = router;
