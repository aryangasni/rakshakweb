import React from "react";
import "./subsystem.css";

const subsystems = [
  {
    name: "Business",
    description: "Strategizing Growth: Driving Innovation and Outreach",
    image: "/images/subsystems/business_banner.jpg",
  },
  {
    name: "Software",
    description: "Engineering Intelligence: Crafting Cutting-Edge Algorithms",
    image: "/images/subsystems/software_banner.jpg",
  },
  {
    name: "Avionics",
    description: "Navigating the Future: Precision in Control Systems",
    image: "/images/subsystems/avionics_banner.jpg",
  },
  {
    name: "Aerodynamics",
    description: "Mastering the Skies: Optimizing Performance and Efficiency",
    image: "/images/subsystems/aerod_banner.jpg",
  },
];


function SubsystemGrid() {
  return (
    <div className="subsystem-grid">
      {subsystems.map((subsystem, index) => (
        <div key={index} className="subsystem-card">
          {subsystem.image ? (
            <img src={subsystem.image} alt={subsystem.name} className="subsystem-image" />
          ) : (
            <div className="subsystem-placeholder">Image Not Available</div>
          )}
          <div className="subsystem-info">
            <h2 className="subsystem-name">{subsystem.name}</h2>
            <p className="subsystem-description">{subsystem.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubsystemGrid;
