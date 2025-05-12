import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import TeamLead from "./TeamLead";
import "./team.css";

const subsystems = [
  { id: "allteamlead", name: "All Team Lead" },
  { id: "avionics", name: "Avionics" },
  { id: "aerod", name: "Aerodynamics" },
  { id: "software", name: "Software" },
  { id: "business", name: "Business" },
];

function TeamPage() {
  const [selectedSubsystem, setSelectedSubsystem] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const numParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 + 1; // Slanting right
        this.speedY = Math.random() * 2 + 1; // Slanting downward
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset when particles go off-screen
        if (this.x > canvas.width) this.x = 0;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  const handleSubsystemClick = (id) => {
    setSelectedSubsystem(id);
    setTimeout(() => {
      const teamLeadsSection = document.getElementById("team-leads");
      if (teamLeadsSection) {
        teamLeadsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Particle Background */}
      <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />

      <Hero />

      {/* Subsystem Selector */}
      <div className="subsystem-container">
        {subsystems.map((sub) => (
          <span
            key={sub.id}
            className={`subsystem-label ${selectedSubsystem === sub.id ? "active" : ""}`}
            onClick={() => handleSubsystemClick(sub.id)}
          >
            {sub.name}
          </span>
        ))}
      </div>

      {/* Team Lead Section */}
      {selectedSubsystem && (
        <div id="team-leads" className={`team-lead-section ${selectedSubsystem ? "visible" : ""}`}>
          <TeamLead selectedSubsystem={selectedSubsystem} />
        </div>
      )}
    </>
  );
}

export default TeamPage;
