import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import logo1 from './right-arrow.png'
import logo2 from './left-arrow.png'
const Login = () => {
  
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };
  const [isExpanded, setisExpanded] = useState(true)
  function navTgl() {
    setisExpanded(!isExpanded)
  }
  return (
    <div className="login">
      <div className="card">
        <div className={isExpanded ? "left" : "left-1"}>
          <h1>Login<br></br> To AgriConnect.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span >Don't you have an account?</span>

          <div >
            <Link to="/register">
              <button>Register</button>
            </Link>
            <button className="arrow-btn" onClick={navTgl}><img src={logo1} alt="arrow" className="left-arrow" /></button>
          </div>
        </div>
        <div className="right">
          <h1>Login.</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <div>
              <button onClick={handleLogin}>Login</button>
              <div className="arrow-btn" onClick={navTgl}><img src={logo2} alt="arrow" className="right-arrow" /></div>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
