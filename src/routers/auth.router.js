import { Router } from "express";
import { signin, signup } from "../Controller/auth.controller";

const router = Router();

router.post("/register", signup);
router.post("/login", signin);

export default router;
