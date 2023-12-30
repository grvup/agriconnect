import React, { useState } from "react";
import "./ContactStyles.scss";
import axios from "axios";

const Contact = () => {

  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    states: "",
    email: "",
    phone: "",
    dob: "",
    season: "",
    experience: "",
    message: "",
    wage:" ",
  });
 console.log(file)
  console.log(inputs);

  const handleChange = (e) => {

      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const formData = new FormData();
      formData.append("file", file);
    for (const key in inputs) {
      formData.append(key, inputs[key]);
    }

      await axios.post("http://localhost:8800/api/posts/worker", formData);
    } catch (err) {
      // Handle error
      console.error("Error submitting the form:", err);
    }
  };





  return (
    <div className="contact-section">
     

      <div className="contact-info">
        <div className="contact-details">
          <h3>Contact Details</h3>
          <p>
            <strong>Address:</strong> A.D.A Colony, Prayagraj, India
          </p>
          <p>
            <strong>Email:</strong> Agriconnect@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +91 9587283091
          </p>
        </div>

        <div className="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            id="name"
            name="name" 
            placeholder="Enter your name" 
            onChange={handleChange} 
            />

            <label htmlFor="image">Select Image:</label>
          <input
            type="file"
            id="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />

<select id="states" name="states" onChange={handleChange}>
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

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" onChange={handleChange}/>

            <label htmlFor="region">Phone:</label>
            <input type="text" id="phone" name="phone" placeholder="Enter your phone number" onChange={handleChange} />

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" onChange={handleChange}></input>
<div className="Container">
            <h2>Select Farm Seasons</h2>

            <label for="rabi">rabi:</label>
    <input type="radio" id="rabi" name="season" value="spring" onChange={handleChange}/>

   

    <label for="kharif">kharif:</label>
    <input type="radio" id="kharif" name="season" value="kharif" onChange={handleChange}/>

    
    

    <label for="zaid">zaid:</label>
    <input type="radio" id="zaid" name="season" value="zaid" onChange={handleChange}/>

   

    </div>

    <label htmlFor="experience">Enter Your Experience:</label>
            <input type="text" id="experience" name="experience" placeholder="Enter your experience" onChange={handleChange} />
            <label htmlFor="message">Wage:</label>
            <input type="text" id="wage" name="wage" placeholder="Enter your wage" onChange={handleChange} />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" onChange={handleChange}></textarea>

            <button  type="submit">Send Details</button>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;