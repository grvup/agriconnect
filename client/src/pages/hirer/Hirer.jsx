import "./hirer.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Hirer = () => {

    const { currentUser } = useContext(AuthContext);
    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }

    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, error, data } = useQuery(["user", userId], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data;
        })
    );
 
    const queryClient = useQueryClient();
    useEffect(() => {
        queryClient.invalidateQueries(["user", userId]);
    }, [userId]);
  
    const imgpath = data ? data.profilepic : "Default Initial Value";
    console.log(imgpath)
    const imagepath = process.env.PUBLIC_URL + '/upload/'+imgpath;
    return (
        <div className="profile">
            {isLoading ? (
                "loading"
            ) : (
                <>
                    <div className="images">
                        <img src={imagepath} alt="" className="profilePic" />
                    </div>
                    <div className="profileContainer">
                        <div className="uInfo">

                            <div className="VertIcon">
                                <MoreVertIcon onClick={navTgl} />
                                <ul className={isExpanded ? "Ul" : "Ul-hide"}>

                                    <li>
                                        <Link
                                            to={`/manageprofile/${currentUser.user_id}`}
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            Manage Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={`/manageaddress/${currentUser.user_id}`}
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            Manage Address
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="PI">
                                <hr />
                                <h3>Personal Information</h3>
                                <div className="Name">
                                    <span>{data.name? data.name.split(" ")[0]: data.name}</span>
                                    <span>{data.name? data.name.split(" ")[1]: data.name}</span>
                                    {/* <span>{data.name}</span> */}
                                </div>
                                <p>Your Gender</p>
                                <div className="gender">

                                    <div className="gender-option">
                                        <input type="radio" id="male" name="gender" value="male" checked={data.gender === 'male'}/>
                                        <label for="male">Male</label>
                                    </div>
                                    <div className="gender-option">
                                        <input type="radio" id="female" name="gender" value="female" checked={data.gender === 'female'}/>
                                        <label for="female">Female</label>
                                    </div>
                                </div>
                                <h3>Email Address</h3>
                                <div className="email">
                                    <span>{data.user_email}</span>
                                </div>
                                <h3>Mobile Number</h3>
                                <div className="MN">
                                    <span>{data.contact_number}</span>
                                </div>
                            </div>

                        </div>
                        {/* <Posts userId={userId} /> */}
                    </div>
                </>
            )}
        </div>
    );
};

export default Hirer;
