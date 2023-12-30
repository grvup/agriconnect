import express from "express";
import { getUser , updateUser,getWorkers,getworker} from "../controllers/user.js";
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

router.get("/find/:userId", getUser)
router.get("/find",getWorkers)
router.put("/update/:userId",upload.single("file"), updateUser)
router.get("/findworker/:userId",getworker)

export default router