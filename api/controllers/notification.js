import { db } from "../connect.js";


export const getnotification = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT notification.content,notification.time,user.profilepic FROM notification , user WHERE receiver_id=? AND receiver_id = user.user_id;"
    // const { season, year } = req.query;
    // let { season, year } = req.query;
    // let season = req.query.season.queryKey[1];
    // let year = req.query.season.queryKey[2];

  
    // // const season = queryKey[1]; // 'kharif'
    // // const year = queryKey[2];
    // year = year === "This year" ? 2023 : season;
    // const q = "SELECT * FROM season WHERE hirerid = ? AND season_name = ? AND year = ?; "
    // // console.log(userId);
    // // console.log(season)
    // // console.log(year)
    db.query(q, [userId],  (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
      });

};

