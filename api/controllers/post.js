import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";


export const addWorker = (req, res) => {
  
    console.log(req.body.name);
    const file = req.file || {};
    // console.log(file);
    const filepath =  file.filename || "default.png";
    const q =
    "INSERT INTO worker (`worker_name`, `contact_no`, `message`, `region`, `date_of_birth`, `work_season`, `worker_email`, `work_experience`, `workerimg`,`wage`) VALUES (?)";
  
    const values = [
      req.body.name,
      req.body.phone,
      req.body.message,
      req.body.states,
      req.body.dob,
      req.body.season,
      req.body.email,
      req.body.experience,
      filepath,
      req.body.wage,

    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("worker data has been saved.");
    });

};
export const addAddress = (req, res) => {
  
  // console.log(req.body);
  const userId=req.params.userId
  const q =
  "INSERT INTO address ( `locality` , `area/street`, `pincode`, `state`, `landmark`, `alt_mob_no`, `user_id`,`city`) VALUES (?)";

  const values = [
    req.body.locality,
    req.body.address_1,
    req.body.pincode,
    req.body.state,
    req.body.landmark,
    req.body.addtionalnumber,
    userId,
    req.body.city,
  ];
  db.query(q, [values], (err, data) => {
    if (err){ 
      console.log(err)
      return res.status(500).json(err);}
    return res.status(200).json("worker data has been saved.");
  });

};

export const hireWorker = (req, res) => {
  // const userId=req.params.id
  const { season_name, season_year, hire_date, hirerid, worker_id ,worker_name} = req.body;
  console.log(req.body)
  
  const query = `
      INSERT INTO season (worker_name,worker_id,hire_date,season_name, season_year, hirerid) 
      VALUES (?, ?, ?, ?,?,?)
  `;

  db.query(query, [worker_name,worker_id,hire_date,season_name, season_year, hirerid], (err, result) => {
      if (err) {
          console.error("Error inserting data into history table:", err);
          return res.status(500).json({ error: "Failed to hire worker" });
      }

      res.status(200).json({ message: "Worker hired successfully", result });
  });
};

