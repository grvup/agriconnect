import "./manageaddress.scss";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import axios from "axios";
// import Update from "../../components/update/Update";
import { useState } from "react";

const Manageaddress = () => {
    const [openUpdate, setOpenUpdate] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const [isExpanded, setisExpanded] = useState(false);
    function navTgl() {
        setisExpanded(!isExpanded)
    }

    const userId = parseInt(useLocation().pathname.split("/")[2]);

    const { isLoading, error, data } = useQuery(["user"], () =>
        makeRequest.get("/users/find/" + userId).then((res) => {
            return res.data;
        })
    );
    const [inputValue, setInputValue] = useState('');
    const [inputValuepincode, setInputValuepincode] = useState('');
    const [inputValuelocality, setInputValuelocality] = useState('');
    const [inputValuecity, setInputValuecity] = useState('');
    const [inputValuelandmark, setInputValuelandmark] = useState('');
    const [inputValueanumber, setInputValueanumber] = useState('');
    const [address, setAddress] = useState({
        pincode: ' ',
        locality: '',
        address_1: '',
        city: '',
        state: '',
        landmark: '',
        addtionalnumber: ' '
    });
    const textareaClass = inputValue ? 'focus-L' : 'L';
    const inputlocalityClass = inputValuelocality ? 'f-name-L' : 'name-L';
    const inputpincodeClass = inputValuepincode ? 'f-name-L' : 'name-L';
    const inputcityClass = inputValuecity ? 'f-name-L' : 'name-L';
    const inputlandmarkClass = inputValuelandmark ? 'f-name-L' : 'name-L';
    const inputanumberClass = inputValueanumber ? 'f-name-L' : 'name-L';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        
          await axios.post("http://localhost:8800/api/posts/address/"+ userId, address);
        } catch (err) {
          // Handle error
          console.error("Error submitting the form:", err);
        }
      };
    return (
        <div className="profile">
            {isLoading ? (
                "loading"
            ) : (
                <>

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
                          
                            <form className="file-upload">
                            <h1>Manage Address</h1>
                            <hr />
                                <div className="F-L">
                                </div>
                                <div className="F-L">
                                    <div class="F-name-container">
                                        <input type="text" id="form-name" name="pincode"
                                            onChange={(e) => {
                                                setInputValuepincode(e.target.value);
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    pincode: e.target.value
                                                }))
                                            }}
                                        />
                                        <label for="pincode" className={inputpincodeClass}>Pincode*</label>
                                    </div>

                                    <div class="F-name-container">
                                        <input type="text" id="form-name" name="locality"
                                            onChange={(e) => {
                                                setInputValuelocality(e.target.value);
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    locality: e.target.value
                                                }))
                                            }}
                                        />
                                        <label for="locality" className={inputlocalityClass}>Locality*</label>
                                    </div>
                                </div>
                                <div className="input-container">

                                    <textarea id="myTextarea" name="myTextarea" rows="4" cols="50"
                                        onChange={(e) => {
                                            setInputValue(e.target.value);
                                            setAddress((prevAddress) => ({
                                                ...prevAddress,
                                                address_1: e.target.value
                                            }))
                                        }}
                                    >
                                    </textarea>
                                    <label className={textareaClass} for="myTextarea">Address(Area & Street)*</label>
                                </div>

                                <div className="F-L">
                                    <div class="F-name-container">
                                        <input type="text" id="form-name" name="city"
                                            onChange={(e) => {
                                                setInputValuecity(e.target.value);
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    city: e.target.value
                                                }))
                                            }}
                                        />
                                        <label for="city" className={inputcityClass}>City/District*</label>
                                    </div>

                                    <div class="F-name-container">

                                        <label for="states" className="State-name">State*</label>
                                        <select id="states" name="states"
                                            onChange={(e) => {
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    state: e.target.value
                                                }));
                                            }}
                                        >
                                            <option disabled selected> --Select State--</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Puducherry">Puducherry</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="F-L">
                                    <div class="F-name-container">
                                        <input type="text" id="form-name" name="landmark"
                                            onChange={(e) => {
                                                setInputValuelandmark(e.target.value);
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    landmark: e.target.value
                                                }))
                                            }}
                                        />
                                        <label for="landmark" className={inputlandmarkClass}>Landmark</label>
                                    </div>

                                    <div class="F-name-container">
                                        <input type="text" id="form-name" name="a-number"
                                            onChange={(e) => {
                                                setInputValueanumber(e.target.value);
                                                setAddress((prevAddress) => ({
                                                    ...prevAddress,
                                                    addtionalnumber: e.target.value
                                                }))
                                            }}
                                        />
                                        <label for="a-number" className={inputanumberClass} >Alternate Phone</label>
                                    </div>
                                </div>
                                <div className="bttns">
                                    <button className="btttn" onClick={handleSubmit}>Save</button>
                                    <button className="btttn" >Cancel</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </>
            )}

        </div>
    );
};

export default Manageaddress;
