import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import img1 from "../../assets/AgriConnect-logos-black.png"
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const [isExpanded, setisExpanded] = useState(false)
  function navTgl() {
    setisExpanded(!isExpanded)
  }
  const mode = darkMode ? "Light" : "Dark";
  return (
    <div className="navbar">
      <div className="left">

        {/* <span>lamasocial</span> */}
        <img src={img1} alt="logo" className="logo" />

        <div className="left-icons">
        
        </div>

      </div>
     
      <div className="right">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <HomeOutlinedIcon />
          </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>WHAT WE DO</Link>

        <Link to="/method" style={{ textDecoration: "none", color: "inherit" }}>HOW WE DO IT</Link>

        <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>CONTACT US</Link>
        {/* <PersonOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <span>{currentUser.name}</span>
        </div> */}
      </div>
      <div className="Menu-icon">
        <MenuIcon fontSize="large" onClick={navTgl} />
      </div>

      <div className={isExpanded ? "bottom" : "bottom-hide"}>
        <div className="Close-icon"  >
          <CloseIcon onClick={navTgl} />
        </div>
        <ul >
          <li> <div className="Li">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <HomeOutlinedIcon fontSize="large" onClick={navTgl} />
            </Link>
            Home
          </div>
          </li>
         
          <li><hr></hr></li>
          <li> <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>WHAT WE DO</Link>  </li>
          <li>  <Link to="/method" style={{ textDecoration: "none", color: "inherit" }}>HOW WE DO IT</Link> </li>
          <li><Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>CONTACT US</Link></li>
          <li><hr></hr></li>
          <li> <h2>{currentUser.name}</h2></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
