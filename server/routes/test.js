import { Router } from "express";
import { test } from "../controler/test.js";
const router = new Router();

router.get("/test", test);

export default router;
