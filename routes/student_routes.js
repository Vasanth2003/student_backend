import express from "express";
import { addStudent, deleteById, searchById, deleteAll, getAllStudents, updateStudentById } from "../controllers/studentController.js";

const studentRouter = express.Router();


studentRouter.post("/students", addStudent);
studentRouter.get("/students", getAllStudents);
studentRouter.put("/students/:id", updateStudentById);
studentRouter.delete("/students/:id", deleteById);
studentRouter.delete("/students", deleteAll); 
studentRouter.get("/students/:id", searchById);

export default studentRouter;
