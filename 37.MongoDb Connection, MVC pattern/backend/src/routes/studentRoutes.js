import express from "express";
import {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

let router = express.Router();

router.get("/students", getAllStudents);

router.get("/students/:id", getStudentById);

router.post("/students", addStudent);

router.put("/students/:id", updateStudent);

router.delete("/students/:id", deleteStudent);

export default router;
