import express from "express";
import { gethistory } from "../controllers/historyy.js";

const router = express.Router()

router.get("/findhistory/:userId", gethistory)
// router.post("/register", register)
// router.post("/logout", logout)


export default router