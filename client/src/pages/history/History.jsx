import React from "react";
import "./history.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import axios from "axios";
export default function History() {
  const [selectedSeason, setSelectedSeason] = useState("rabi");
  const [selectedYear, setSelectedYear] = useState("This year");

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };
  // console.log(selectedSeason)
  // console.log(selectedYear)
  const { isLoading, error, data } = useQuery(["user", selectedSeason, selectedYear], (selectedSeason, selectedYear) =>
  makeRequest.get("/history/findhistory/" + userId, {
    params: {
      season: selectedSeason,
      year: selectedYear
    }
  }).then((res) => {
    return res.data;
  })
  );
  let imgpath = " ";
  let imagepath = " ";
  // console.log(imgpath)
  // const imagepath = process.env.PUBLIC_URL + '/upload/'+imgpath;
  const dataSize = data ? data.length : 0;
  
  const WorkerHistoryContainer = ({ user }) => (
    <div className="history-content">
      <div className="imagepath">

      {imgpath = user ? user.workerimg : " "}
      { imagepath = process.env.PUBLIC_URL + '/upload/'+imgpath}

      </div>

      {/* <Link
              to={`/workerprofile/${user.worker_id}`}
              style={{ textDecoration: "none", color: "inherit" }}
    >
  
     <img src={" https://bootdey.com/img/Content/avatar/avatar3.png"} alt=" " />
     </Link> */}
      <div>
        <img src={imagepath} className="not-prof-img" alt="" />
        <div className="ww">

        You Hired {user.worker_name}
        <span>{user.wage}</span>
        </div>
      </div>
    </div>
  );
  const renderWorkerhistory = () => {
    if (Array.isArray(data)) {
      return data.map((user, index) => (
        <WorkerHistoryContainer key={index} user={user} />
      ));
    } else {
    
      return null; 
    }
  }
  return (
    <div className="history-main">
      <h1 className="history-head">Your History</h1>
      <nav className="history-nav">
        <div className="history-select">
          <label for="seasons">Season: </label>

          <select name="seasons"
            id="seasons"
            value={selectedSeason}
            onChange={handleSeasonChange}>
            <option value="kharif">Kharif</option>
            <option value="rabi">Rabi</option>
            <option value="zayd">Zayd</option>
          </select></div>
        <div className="history-select">
          <label for="years">Year: </label>

          <select name="years" id="years"
            value={selectedYear}
            onChange={handleYearChange}>
            <option value="This year">This year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </select></div>
     
      </nav>
      <div className="history-contents">
        
          <h3>You Hired {dataSize} peoples this season</h3>
          {error
            ? "Something went wrong!"
            : isLoading
              ? "loading"
              : renderWorkerhistory()}
      
     
      </div>
    </div>
  )
}