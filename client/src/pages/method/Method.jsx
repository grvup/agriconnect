import React from "react";
import "./MethodStyles.scss";

import logo1 from "../../assets/homebg2.jpg";

const Method = () => {
  return (
    <div className="method-section">
      <h2 className="method-title">Our Farming Methods</h2>
      <p className="method-description">
        At our agricultural website, we employ a variety of sustainable farming
        methods to ensure the health of our crops and the environment. Our
        methods are carefully chosen to promote eco-friendly and responsible
        agriculture.
      </p>

      <div className="method-card">
        <img src={logo1} alt="Method 1" className="method-image" />
        <h3 className="method-name">Organic Farming</h3>
        <p className="method-info">
          Organic farming focuses on natural processes and avoids the use of
          synthetic pesticides and fertilizers. It promotes soil health and
          reduces environmental impact.
        </p>
      </div>

      <div className="method-card">
        <img
          src="https://media.istockphoto.com/id/1280351483/photo/aerial-view-of-a-field-half-of-which-is-uncultivated-and-covered-with-young-green-plants.jpg?s=1024x1024&w=is&k=20&c=lejmTWAw3MvZfwsGkRrHF01Gd-QpmN-XrfzKWmVrrm4="
          alt="Method 2"
          className="method-image"
        />
        <h3 className="method-name">Crop Rotation</h3>
        <p className="method-info">
          Crop rotation helps maintain soil fertility, reduces pests, and
          prevents soil depletion. It's an essential practice for sustainable
          farming.
        </p>
      </div>

      <div className="method-card">
        <img
          src="https://media.istockphoto.com/id/503027247/photo/drip-irrigation-system.jpg?s=1024x1024&w=is&k=20&c=htr2D9waBInyaO6dx_zTzIHIEj6UeyDV8aCcTENJ-p4="
          alt="Method 3"
          className="method-image"
        />
        <h3 className="method-name">Drip Irrigation</h3>
        <p className="method-info">
          Drip irrigation conserves water and ensures efficient water delivery to
          plants. It's a water-saving method for farming in arid regions.
        </p>
      </div>

      {/* Add more farming methods with images and descriptions below */}
      {/* <div className="method-card">
        <img src="your_image_url" alt="Method 4" className="method-image" />
        <h3 className="method-name">New Farming Method</h3>
        <p className="method-info">
          Description of the new farming method and its benefits.
        </p>
      </div> */}

      {/* Example of embedding a video using an iframe */}
      <div className="method-card">
        <iframe
          title="Sample Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/iloAQmroRK0"
          frameBorder="0"
          allowFullScreen
          className="method-video"
        ></iframe>
        <h3 className="method-name">Video: Sustainable Farming</h3>
        <p className="method-info">
          Watch this video to learn more about sustainable farming practices.
        </p>
      </div>
    </div>
  );
};

export default Method;