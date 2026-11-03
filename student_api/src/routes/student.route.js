const express = require("express");
const studentcontroller = require("../controllers/student.controller")
const router = express.Router();

router.get("/", studentcontroller.getAllStudents);
router.get("/:id", studentcontroller.getStudentsById);

router.post("/", studentcontroller.createStudent);

router.put("/:id", studentcontroller.updateStudent);

router.delete("/:id", studentcontroller.deleteStudent);

module.exports = router;