import express from "express";
import { getnotification } from "../controllers/notification.js";


const router = express.Router()

router.get("/findnotification/:userId", getnotification)



export default router