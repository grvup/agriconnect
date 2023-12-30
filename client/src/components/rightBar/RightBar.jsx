import "./rightBar.scss";
import {Link} from "react-router-dom";
const RightBar = ({ user }) => {
  // console.log(user)
  let imgpath = " ";
  let imagepath = " ";
  
  imgpath = user ? user.workerimg : " "
  imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath
  return (
    <div className="user">
      <div className="userInfo">
      <Link
                to={`/workerprofile/${user.worker_id}`}
                style={{ textDecoration: "none", color: "inherit" }}
      >
    
      <img
        src={imagepath}
        alt=""
      />
      <div className="online" />
     
      </Link>
      <span>{user.worker_name}</span>
      </div>
    </div>
  );
};

export default RightBar;
