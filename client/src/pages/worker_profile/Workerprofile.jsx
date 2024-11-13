import "./workerprofile.scss";
import { useQuery, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Workerprofile = () => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [isExpanded, setisExpanded] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [seasonName, setSeasonName] = useState("kharif"); // Default season
    const [seasonYear, setSeasonYear] = useState(new Date().getFullYear()); // Default current year
    const [hireDate, setHireDate] = useState(""); // Default empty, let user select
    
    const userId = parseInt(useLocation().pathname.split("/")[2]);
    // const { currentUser ,logout} = useContext(AuthContext);
    const hirerId = currentUser.user_id;
    const { isLoading, error, data } = useQuery(["user", userId], () =>
        makeRequest.get("/users/findworker/" + userId).then((res) => res.data)
    );

    const imgpath = data ? data.workerimg : "Default Initial Value";
    const imagepath = process.env.PUBLIC_URL + '/upload/' + imgpath;

    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    // Mutation to handle hiring the worker
    const hireWorker = useMutation((hireData) => 
        makeRequest.post("/posts/hireworker/", hireData)
    );

    const handleHire = () => {
        const hireData = {
            season_name: seasonName,
            season_year: seasonYear,
            hire_date: hireDate,
            hirerid: hirerId,
            worker_id:userId,
            worker_name:data.worker_name? data.worker_name:" ",
        };
        
        hireWorker.mutate(hireData, {
            onSuccess: () => {
                console.log("Worker hired successfully!");
                closePopup();
            },
            onError: (error) => {
                console.error("Failed to hire worker:", error);
            }
        });
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
                // </div>
            )}
            {!isLoading && isPopupOpen && (
                 <div>
                 <div className="overlay" onClick={closePopup}></div>
                 <div className="hire">
                     <div className="popup">
                         <div className="popup-content">
                             <span className="close" onClick={closePopup}>&times;</span>
                             <h2>Hire Worker</h2>
                             <div className="a1">
                                 <div className="b1">
                                     <img src={imagepath} alt="" />
                                     <span>{data.worker_name}</span>
                                 </div>
                                 <p>Wage: {data.wage}/day</p>
                             </div>

                             {/* Season name selection */}
                             <div className="form-group">
                                 <label>Season Name:</label>
                                 <select value={seasonName} onChange={(e) => setSeasonName(e.target.value)}>
                                     <option value="kharif">Kharif</option>
                                     <option value="rabi">Rabi</option>
                                     <option value="zaid">Zaid</option>
                                 </select>
                             </div>

                             {/* Season year selection */}
                             <div className="form-group">
                                 <label>Season Year:</label>
                                 <input 
                                     type="number" 
                                     value={seasonYear} 
                                     onChange={(e) => setSeasonYear(e.target.value)} 
                                     min="2000" max="2100" 
                                 />
                             </div>

                             {/* Hire date selection */}
                             <div className="form-group">
                                 <label>Hire Date:</label>
                                 <input 
                                     type="date" 
                                     value={hireDate} 
                                     onChange={(e) => setHireDate(e.target.value)} 
                                 />
                             </div>

                             <button onClick={handleHire}>Confirm Hire</button>
                         </div>
                     </div>
                 </div>
             </div>
            )}
        </div>
    );
};

export default Workerprofile;
