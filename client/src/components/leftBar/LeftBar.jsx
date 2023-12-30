import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";

import { AuthContext } from "../../context/authContext";
import { useContext, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import "./ayeeeein.mp3"
import { Howl } from 'howler';
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined";
import LogoutIcon from '@mui/icons-material/ExitToApp';

const LeftBar = () => {

  // console.log(userId)
  // const { logout } = useAuth();
  const { currentUser ,logout} = useContext(AuthContext);
  const userId = currentUser.user_id;
  // console.log(currentUser)
    const handleLogout = () => {
      logout();
      
    };
    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data;
        })
    );
  console.log(data)
  const imgpath = data ? data.profilepic : "Default Initial Value";
  console.log(data)
  const imagepath = process.env.PUBLIC_URL + '/upload/'+imgpath;
  const sound = new Howl({
    src: ['/ayeeeein.mp3'],
    preload: true, // Preload the audio
  });
  const playAudioOnHover = () => {
    sound.play();
  };
  // console.log(currentUser)
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">

            <img
              src={imagepath}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <Link
            to={`/hire/${currentUser.user_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <img src={Friends} alt="" />
              <span>Your Profile</span>
            </div>
          </Link>
          <Link
            to={`/hireworker/${currentUser.user_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="item">
              <img src={Groups} alt="" />
              <span>Hire Workers</span>
            </div>
          </Link>
          <Link
            to={`/history/${currentUser.user_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <div className="item">
            <img src={Watch} alt="" />
            <span>History</span>
          </div>
          </Link>
          <Link
            to={`/notifications/${currentUser.user_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
          <div className="item">
            {/* <img src={Memories} alt="" /> */}
            <NotificationsOutlined fontSize="large" onMouseEnter={playAudioOnHover} />
            <span>Notification</span>
          </div>
          </Link>
        <div className="item">
        <LogoutIcon onClick={handleLogout}/> 
              <span>Logout</span>
            </div>
        </div>
        <hr />
      

      </div>
      {/* <h1 className="not-head">Notifications    <span className="bell" >
        <NotificationsOutlined fontSize="32" onMouseEnter={playAudioOnHover}/>
      </span></h1> */}
    </div>

  );
};

export default LeftBar;
