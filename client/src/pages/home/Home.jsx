import React from 'react';
import "./home.scss"
import img1 from "../../assets/organic_img.jpg";
import img2 from "../../assets/homebg.jpg"
import img3 from "../../assets/homebg2.jpg"
import img4 from "../../assets/homebg3.jpg"
import img5 from "../../assets/homebg4.jpeg"
import img6 from "../../assets/client.jpg"
import img7 from "../../assets/client1.webp"

import FaFacebook from "@mui/icons-material/Facebook";
import FaTwitter from "@mui/icons-material/Twitter";
import FaInstagram from "@mui/icons-material/Instagram";
const Home = () => {
  return (
    <div>
      <header>
        <nav>
         <h1>AgriConnect</h1>
        </nav>
      </header>

      <main>

      <section className="about-website">
          <h2>About Our Website</h2>
          <div className="content">
            <img src={img2} alt="Hiring Image" />
            <p>Welcome to our platform dedicated to supporting the agriculture industry. We connect farmers with skilled workers for seasonal or long-term jobs. Whether you need assistance during harvest or seek full-time farmhands, our platform streamlines the hiring process.</p>
           
          </div>
        </section>
        <section className="weather-forecast">
          <h1>Actionable Weather Forecast</h1>
          <div className="content">
            <img src={img1} alt="Weather Forecast Image" />
            <p>Stay ahead with our real-time weather updates tailored for farmers. Get daily, weekly, and monthly forecasts to plan your agricultural activities efficiently. Receive alerts for extreme weather conditions to safeguard your crops.</p>
          </div>
          {/* You can integrate a weather API or service to display actual forecast data here */}
        </section>

        

        <section className="services">
          <h2>Our Services</h2>
          <div className="service">
            <img src={img3} alt="Service 1 Image" />
            <p>"Experience a comprehensive suite of services tailored to meet the unique needs of both farm workers and employers in the agriculture industry. From streamlined job matching to expert career guidance, our platform is your one-stop solution for all your agricultural employment needs."</p>
          </div>
          <div className="service">
            <img src={img4} alt="Service 2 Image" />
            <p>"We pride ourselves on offering a full spectrum of services to make your journey in the agriculture industry a success. From targeted job matching and skill development resources for farm workers to advanced recruitment solutions for employers, we are committed to fostering a thriving and connected agricultural community."</p>
          </div>
          {/* More service sections can be added */}
        </section>

        <section className="testimonials">
          <h2>Client Testimonials</h2>
          <div className="testimonial">
            <img src={img6} alt="Client 1 Image" />
            <p>"This website has been a game-changer for our farm. We were able to find skilled and dedicated workers quickly and efficiently. The platform's user-friendly design and extensive candidate profiles make it a valuable tool for both employers and job seekers in the agriculture sector."</p>
          </div>
          <div className="testimonial">
            <img src={img7} alt="Client 2 Image" />
            <p>"This website connects farm workers with employers seamlessly. I found a job that matched my skills perfectly, and the entire process was stress-free. I highly recommend this platform to anyone in the agriculture industry who is looking for new opportunities."</p>
          </div>
          {/* More testimonials can be added */}
        </section>
      </main>

      <footer>
  <div className="footer-content">
    <p>Contact Us:</p>
    <ul>
      <li>Address: A.D.A Colony,Prayagraj,India</li>
      <li>Email: agriconnect@gmail.com</li>
      <li>Phone: 9587283091</li>
    </ul>
    
    <div className="social-links">
    <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;