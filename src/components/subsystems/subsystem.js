import React from "react";
import SubsystemGrid from "./subsystemgrid";
import "./subsystem.css"; 
import SubsystemDetails from "./subsystemdetail"; 

function Subsystem() {
  return (
    <div className="subsystem-page">
      {/* Hero Section */}
      <div className="subsystem-banner">
        <h1 className="subsystem-title">Exploring the Core Subsystems of Rakshak</h1>
        <p className="subsystem-subtitle">
          Each subsystem is a vital component in our journey towards engineering innovation and excellence.
        </p>
      </div>

      {/* Subsystem Grid */}
      <SubsystemGrid />

      {/* Subsystem Sections */}
      <SubsystemDetails />
    </div>
  );
}

export default Subsystem;
