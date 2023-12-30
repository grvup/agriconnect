import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import logo1 from './right-arrow.png'
import logo2 from './left-arrow.png'
const Register = () => {
  const [inputs, setInputs] = useState({
    user_name: "",
    user_email: "",
    password: "",
    name: "",
  });
  console.log(inputs);
  const [err, setErr] = useState(null);
 console.log(inputs);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  const [isExpanded, setisExpanded] = useState(true)
  function navTgl() {
    setisExpanded(!isExpanded)
  }
  // console.log(err)

  return (
    <div className="register">
      <div className="card">
        <div className={isExpanded ? "left" : "left-1"}>
          <h1>Register <br></br>to AgriConnect.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <div >
            <Link to="/login">
              <button>Login</button>
            </Link>
            <button className="arrow-btn" onClick={navTgl}><img src={logo1} alt="arrow" className="left-arrow" /></button>
          </div>
        </div>
        <div className="right">
          <h1>Register.</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="user_name"
              onChange={handleChange}
              />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              onChange={handleChange}
              />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              />
            <div>
              <div className="arrow-btn" onClick={navTgl}><img src={logo2} alt="arrow" className="right-arrow" /></div>
              <button onClick={handleClick}>Register</button>
            </div>
             { err&&err}
               {/* { err===null ? " ": alert(err)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
