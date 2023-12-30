import React from "react";
import "./AboutStyles.scss";
// import img1 from "../../assets/organic_img.jpg";
import img2 from "../../assets/homebg.jpg"
import img3 from "../../assets/homebg2.jpg"
import img4 from "../../assets/homebg3.jpg"
import img5 from "../../assets/homebg4.jpeg"
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="description">
        <h1>About Our Agricultural Website</h1>
        <p>
          Welcome to our agricultural website! We are dedicated to promoting
          sustainable farming practices and providing valuable resources to
          farmers and enthusiasts.
        </p>
        <p>
          Our mission is to support the agricultural community by sharing
          knowledge, tips, and the latest advancements in farming. Whether
          you're a seasoned farmer or just starting, we have something for you.
        </p>
        <p>
          Feel free to explore our website to find information on crop
          cultivation, livestock management, and more. We are committed to
          helping you succeed in the world of agriculture.
        </p>
        <p>
          Contact us at AgriConnect.com for any inquiries or assistance.
        </p>

        <h2>Our Commitment to Sustainability</h2>
        <p>
          Sustainability is at the core of our mission. We believe in
          responsible farming practices that not only ensure bountiful harvests
          but also protect the environment for future generations.
        </p>
        <p>
          Our website offers articles, videos, and guides on eco-friendly
          farming methods, reducing waste, and conserving natural resources.
        </p>
      </div>

      <h2>Image Gallery</h2>

      <div className="image-gallery">
        <div className="gallery-container">
          <img src={img2} alt="Imag" className="gallery-image" />
          <img src={img3} alt="Imag" className="gallery-image" />
          <img src={img4} alt="Imag" className="gallery-image" />
          <img src={img5} alt="Imag" className="gallery-image" />
          {/* /* Add more images as needed */}
        </div>
      </div>

      <h2>Video Showcase</h2>
      <div className="video-container">
        <iframe
          title="Sample Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vch2RtfHbtQ"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <iframe
          title="Sample Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vjZQV6podOI"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutUs;