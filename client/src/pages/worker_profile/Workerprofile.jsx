import "./workerprofile.scss";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Workerprofile = () => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }

    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, error, data } = useQuery(["user", userId], () =>
        makeRequest.get("/users/findworker/" + userId).then((res) => {
            return res.data;
        })
    );
    const imgpath = data ? data.workerimg : "Default Initial Value";
    console.log(imgpath)
    const imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath;
    // console.log(data[0]);
    // console.log(userId)
    console.log(data)
    // console.log("gaurav")

    const [isPopupOpen, setPopupOpen] = useState(true);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleHire = (data) => {
        // Perform your further hiring process and data submission here
        console.log('Hiring:', data);
        // Close the popup after processing
        closePopup();
    };

    return (
        <div className={`profile`}>

            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            {isLoading ? (
                "loading"
            ) : (
                <div className={`maincontent ${isPopupOpen ? 'blur' : ''}`}>
                    <div className="row">
                        <div className="profile-nav ">

                            <div className="user-heading round">

                                <img src={imagepath} alt=" " />


                                <div className="bio-data">
                                    <h1>{data.worker_name}</h1>
                                    <p>{data.worker_email}</p>
                                    <div className="Buttons">
                                        <button onClick={openPopup}>Hire</button>
                                        <button>Message</button>
                                    </div>



                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bio-graph-info">
                        <h1>Bio Graph</h1>

                        <div className="bio-row">
                            <p><span>First Name </span>:  {data.worker_name ? data.worker_name.split(" ")[0] : data.worker_name}</p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Last Name </span>:  {data.worker_name ? data.worker_name.split(" ")[1] : data.worker_name}</p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Region </span>: {data.region} </p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Birthday</span>:   {data.date_of_birth}</p>
                        </div>
                        <hr></hr>

                        <div className="bio-row">
                            <p><span>Work Experience </span>: {data.work_experience}</p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Email </span>: {data.worker_email}</p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Mobile </span>: {data.contact_no}</p>
                        </div>
                        <hr></hr>
                        <div className="bio-row">
                            <p><span>Message </span>: {data.message}</p>
                        </div>
                        <hr></hr>

                    </div>

                </div>
            )}
            {isLoading ? "Loading" : (

                <div >

                    {isPopupOpen && (
                        <div className="overlay" onClick={closePopup}></div>
                    )}
                    {isPopupOpen && (
                        <div className="hire">
                            <div className="popup">
                                <div className="popup-content">
                                    <span className="close" onClick={closePopup}>
                                        &times;
                                    </span>

                                    <h2>Hire Worker</h2>
                                    <div className="a1">

                                        <div className="b1">
                                            <img src={imagepath} alt="" />
                                            <span>{data.worker_name}</span>
                                        </div>
                                        <p>Wage:  {data.wage}/day</p>
                                    </div>

                                    {/* <button onClick={() => handleHire()}>Confirm Hire</button> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}


        </div>
    );
};

export default Workerprofile;
