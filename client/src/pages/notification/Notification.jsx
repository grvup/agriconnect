import React from "react";
import "./Notification.scss"
import { Howl } from 'howler';
import "./ayeeeein.mp3";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";


export default function Notification() {

  const userId = parseInt(useLocation().pathname.split("/")[2]);
  console.log(userId)
  const { isLoading, error, data } = useQuery(["users"], () =>
    makeRequest.get("/notification/findnotification/" + userId).then((res) => {
      return res.data;
    })
  );
  console.log(data);
  const sound = new Howl({
    src: ['/ayeeeein.mp3'],
    preload: true,
  });
  function playAudio() {
    sound.play();

  }
  let imgpath = " ";
  let imagepath = " ";

  const UserNotificationContainer = ({ user }) => (

    <p className="notify" >
      <div className="imagepath">
        {imgpath = user ? user.profilepic : " "}
        {imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath}

      </div>
      <img src={imagepath} className="not-prof-img" alt="" />
      <div className="h4p">
        <h4>{user.content}</h4>
        <span className="timestamp">{user.time}</span>
      </div>
    </p>
  );

  const renderUserNotification = () => {

    if (Array.isArray(data)) {
      return data.map((user, index) => (
        <UserNotificationContainer key={index} user={user} />
      ));
    } else {

      return null;
    }
  };

  return (
    <div className="not-main">
      <h1 className="not-head">Notifications    <span className="bell" onMouseEnter={playAudio}>
        <NotificationsOutlinedIcon fontSize="32" />

      </span></h1>
      <div className="not-content">


        {error
          ? "Something went wrong!"
          : isLoading
            ? "loading"
            : renderUserNotification()
        }
      </div>
    </div>
  );
}