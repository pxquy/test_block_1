import { Router } from "express";
import {
  createCourses,
  deleteCourses,
  getAll,
  getById,
  updateCourses,
} from "../Controller/courses.controller";

const router = Router();

router.get("/", getAll);
router.get("/:id", getById);
router.get("/", createCourses);
router.get("/:id", updateCourses);
router.get("/:id", deleteCourses);

export default router;
