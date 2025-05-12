import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./subsystem.css";

const subsystemDetails = [
  {
    name: "Business",
    description: "The Business subsystem manages sponsorships, marketing, and outreach, ensuring Rakshak's financial stability and brand recognition.",
    images: ["/images/business1.jpg", "/images/business2.jpg", "/images/business3.jpg"]
  },
  {
    name: "Software",
    description: "The Software subsystem develops cutting-edge algorithms for simulation, automation, and vehicle control, ensuring high performance and safety.",
    images: ["/images/software1.jpg", "/images/software2.jpg", "/images/software3.jpg"]
  },
  {
    name: "Avionics",
    description: "Avionics focuses on the electronic systems used in aerospace and automotive applications, handling navigation, communication, and control systems.",
    images: ["/images/avionics1.jpg", "/images/avionics2.jpg", "/images/avionics3.jpg"]
  },
  {
    name: "Aerodynamics",
    description: "The Aerodynamics subsystem optimizes airflow, reduces drag, and ensures maximum efficiency, improving vehicle stability and performance.",
    images: ["/images/aerodynamics1.jpg", "/images/aerodynamics2.jpg", "/images/aerodynamics3.jpg"]
  },
];

function SubsystemDetails() {
  return (
    <div className="subsystem-details-section">
      <div className="particle-background"></div>
      
      {/* Section Separator */}
      <div className="section-separator"></div>

      {subsystemDetails.map((subsystem, index) => (
        <div key={index} className={`subsystem-details-block ${index % 2 === 0 ? "left" : "right"}`}>
          
          {/* Text Content */}
          <div className="subsystem-text">
            <h2 className="subsystem-details-name">{subsystem.name}</h2>
            <p className="subsystem-details-text">{subsystem.description}</p>
          </div>
          
          {/* Image Carousel */}
          <div className="subsystem-carousel-container">
            <Carousel interval={3000} fade>
              {subsystem.images.map((image, imgIndex) => (
                <Carousel.Item key={imgIndex}>
                  <img src={image} alt={`${subsystem.name} ${imgIndex + 1}`} className="subsystem-carousel-image" />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

        </div>
      ))}
    </div>
  );
}

export default SubsystemDetails;
