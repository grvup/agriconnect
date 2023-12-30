import { db } from "../connect.js";


export const gethistory = (req, res) => {
    const userId = req.params.userId;
    // const { season, year } = req.query;
    // let { season, year } = req.query;
    let season = req.query.season.queryKey[1];
    let year = req.query.season.queryKey[2];

  
    // const season = queryKey[1]; // 'kharif'
    // const year = queryKey[2];
    year = year === "This year" ? 2023 : season;
    const q = "SELECT * FROM worker WHERE worker_id = (SELECT worker_id FROM season WHERE season.season_name=? AND season.season_year=? AND season.hirerid=? ); "
    // console.log(year)
    db.query(q, 
        [
         season,
         year,
        userId,
       ], 
    (err, data) => {
        if (err) 
        {
            console.log(err)
            return res.status(500).json(err);}
        return res.status(200).json(data);
      });

};

