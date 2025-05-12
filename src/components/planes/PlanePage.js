import React, { useEffect } from "react";
import "./planes.css";

const planesData = [
  {
    year: "2024",
    name: "Ares",
    description:
      "Meet Ares, a high-performance UAV built for the UAS Challenge 2024. With a 2.2-meter wingspan and weighing just 5 kg, it delivers a 35-minute flight time and autonomous features like takeoff, landing, waypoint navigation, and payload drop.",
    image: "/images/Ares.jpg",
  },
  {
    year: "2023",
    name: "Zephyr",
    description:
      "Zephyr is an advanced UAV designed for endurance missions. With an extended flight time of 50 minutes, it features AI-assisted navigation and payload delivery capabilities.",
    image: "/images/Zephyr.jpg",
  },
  {
    year: "2022",
    name: "Orion",
    description:
      "Orion was a breakthrough in our UAV lineup, featuring fully autonomous mission planning, real-time obstacle detection, and optimized aerodynamics for enhanced stability.",
    image: "/images/Orion.jpg",
  },
];

function Planes() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".timeline-point").forEach((marker) => {
        const rect = marker.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          marker.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="planes-page">
      {/* Particle Background */}
  

      <h1 className="planes-title">Rakshak's Aircraft Evolution</h1>

      <div className="timeline-container">
        {/* Vertical Timeline Line */}
        <div className="timeline">
          <div className="timeline-line"></div>

          {planesData.map((plane, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-point"></div>
              <div className="timeline-year">{plane.year}</div>

              {/* Alternating Left-Right Layout */}
              <div className={`plane-details ${index % 2 === 0 ? "left" : "right"}`}>
                <img src={plane.image} alt={plane.name} className="plane-image" />
                <div className="plane-info">
                  <h2 className="plane-name">{plane.name}</h2>
                  <p className="plane-description">{plane.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Planes;
