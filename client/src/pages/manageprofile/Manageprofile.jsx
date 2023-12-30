import "./manageprofile.scss";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from './1700765187574pic3.jpg'
const Manageprofile = () => {

    const [file, setFile] = useState(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    const { currentUser } = useContext(AuthContext);
    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }

    const userId = parseInt(useLocation().pathname.split("/")[2]);
    console.log(userId)
    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data;
        })
    );


    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("inputValue", inputValue);
            formData.append("inputValueLname", inputValueLname);
            formData.append("inputValueEmail", inputValueEmail);
            formData.append("inputValueGender", inputValueGender);
            formData.append("inputValueMnumber", inputValueMnumber);
            formData.append("previmg",intialimg); 
            // console.log(formData)
            // console.log("ho")
            await axios.put("http://localhost:8800/api/users/update/" + userId, formData);
        } catch (err) {
            console.log(err);
        }
    };
  

    const initialDataFName = data ? data.name.split(" ")[0] : "Default Initial Value";
    const initialDataLName = data ? data.name.split(" ")[1] : "Default Initial Value";
    const initialDataEmail = data ? data.user_email : "Default Initial Value";
    const initialDataMnumber = data ? data.contact_number : "";
    const intialimg = data ? data.profilepic :"";


    const [inputValue, setInputValue] = React.useState(initialDataFName);
    const [inputValueLname, setInputValueLname] = React.useState(initialDataLName);
    const [inputValueEmail, setInputValueEmail] = React.useState(initialDataEmail);
    const [inputValueMnumber, setInputValueMnumber] = React.useState(initialDataMnumber);
    const [inputValueGender, setInputValueGender] = React.useState("");
    React.useEffect(() => {
        if (!isLoading && data) {
            setInputValue(data.name.split(" ")[0]);
            setInputValueLname(data.name.split(" ")[1]);
            setInputValueEmail(data.user_email);
            setInputValueMnumber(data.contact_number);

        }
    }, [isLoading, data]);

    const handleChange1 = (e) => {
        setInputValue(e.target.value);
    };
    const handleChange2 = (e) => {
        setInputValueLname(e.target.value);
    };
    const handleChange3 = (e) => {
        setInputValueEmail(e.target.value);
    };
    const handleChange4 = (e) => {
        setInputValueMnumber(e.target.value);
    };
    const handleChange5 = (e) => {
        setInputValueGender(e.target.value);
    }
    console.log(inputValue)
    console.log(inputValueLname)
    console.log(inputValueMnumber)
    console.log(inputValueEmail)
    console.log(inputValueGender);
    console.log(file)
    console.log(intialimg);

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
                        <input
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <label htmlFor="file">
                            <img src={imagepath} alt="" className="profilePic" />
                        </label>
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
                                <div className="name">
                                    <div class="F-name">
                                        <input type="text" value={inputValue} onChange={handleChange1} aria-label="First name" />
                                    </div>

                                    <div class="L-name">
                                        <input type="text" value={inputValueLname} onChange={handleChange2} aria-label="Last name" />
                                    </div>
                                </div>
                                <p>Your Gender</p>
                                <div className="gender">

                                    <div className="gender-option">
                                        <input type="radio" id="male" name="gender" value="male" onChange={handleChange5} />
                                        <label for="male">Male</label>
                                    </div>
                                    <div className="gender-option">
                                        <input type="radio" id="female" name="gender" value="female" onChange={handleChange5} />
                                        <label for="female">Female</label>
                                    </div>
                                </div>
                                <h3>Email Address</h3>
                                <div className="email">
                                    <input type="text" value={inputValueEmail} onChange={handleChange3} aria-label="email" />
                                </div>
                                <h3>Mobile Number</h3>
                                <div className="Mn">
                                    <input type="text" value={inputValueMnumber} onChange={handleChange4} aria-label="Phone number" />
                                </div>
                                <button className="btn" onClick={handleClick}>Save</button>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Manageprofile;
