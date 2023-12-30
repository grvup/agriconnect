import "./Hireworker.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// import { makeRequest } from "../../axios";
const Postjob = () => {


  const { currentUser } = useContext(AuthContext);
 
  
  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/users/find").then((res) => {
      return res.data;
    })
  );

  console.log(isLoading)
  let imgpath = " ";
  let imagepath = " ";
  

  const UserProfileContainer = ({ user }) => (
    <div className="user-container">
      <div className="imagepath">

      {  imgpath = user ? user.workerimg : " "}
      { imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath}
      </div>
      <Link
                to={`/workerprofile/${user.worker_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
      >
    
       <img src={imagepath} alt=" " />
       </Link>
       <span>{user.worker_name} </span>
       <p>WE:{user.work_experience}</p>
    </div>
  );

  const renderUserProfiles = () => {
    return data.map((user, index) => (
      <UserProfileContainer key={index} user={user} />
    ));

  };
  return (
    <div className="Main">
      <div className="user-profiles-container">
      {error
          ? "Something went wrong!"
          : isLoading
            ? "loading"
            : renderUserProfiles()}
    </div>
     

    </div>
  );
};

export default Postjob;
