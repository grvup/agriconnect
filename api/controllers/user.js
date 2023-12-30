import { db } from "../connect.js";
import multer from "multer";

import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM user WHERE user_id=?";
  // console.log(userId)
  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data[0]);
  });
};

export const getWorkers = (req,res) => {
  const q = "SELECT * FROM worker";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};



export const updateUser = (req, res) => {
  const userId = req.params.userId;
  const token = req.cookies.accessToken;
  // inputValue,inputValueLname
  const fullName = `${req.body.inputValue} ${req.body.inputValueLname}`;
  // console.log(token);
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "secretkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

    const q =
      "UPDATE user SET `name`=?, `user_email`=?, `gender`=?,`contact_number`=?,`profilepic`=? WHERE user_id=? ";
       console.log(req.body.inputValueGender)
      //  console.log(userId);
      //  console.log(fullName);
      const file = req.file || {};
      console.log(file);
      const filepath =  file.filename || req.body.previmg;
    db.query(
      q,
      [
        fullName,
        req.body.inputValueEmail,
        req.body.inputValueGender,
        req.body.inputValueMnumber,
        filepath,
        userId,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        // return res.status(403).json("You can update only your post!");
      }
    );
  // });
};

export const getworker = (req,res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM worker WHERE worker_id=?";

  db.query(q,[userId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
// /dbms_p/public/upload/1700764100844red-heart-gcf1818b27_640.png
// 1698152388029Screenshot 2023-10-01 151758.png