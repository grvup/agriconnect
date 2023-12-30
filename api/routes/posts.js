import express from "express";
import { addAddress, addWorker } from "../controllers/post.js";
import multer from "multer";
const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../dbms_p/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

  const upload = multer({ storage: storage });
  
  router.post("/worker",upload.single("file"), addWorker);
  router.post("/address/:userId", addAddress);


export default router;
