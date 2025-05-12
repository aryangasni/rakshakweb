import React from "react";
import "./team.css";

const teamLeadsData = {
  allteamlead: [
    {
      name: "Jahnvee Tailor",
      image: "images/2425Lead1.jpg",
      email: "jahnvee@example.com",
      description: "Responsible for aerodynamic analysis and wind tunnel testing.",
    },
    {
      name: "Apoorva Rajadhyaksha",
      image: "images/2425Lead2.jpg",
      email: "apoorva@example.com",
      description: "Handles aerodynamic simulations and data analysis.",
    },
    {
      name: "Vraj Patel Kanubhai",
      image: "images/2425Lead3.jpg",
      email: "vraj@example.com",
      description: "Focuses on improving vehicle aerodynamics efficiency.",
    },
  ],
  aerod: [],
  avionics: [],
  software: [],
  business: [],
};

function TeamLead({ selectedSubsystem }) {
  return (
    <div className=" container fade-in text-center">
      {/* 🛠 FIX: Added "d-flex justify-content-center flex-wrap" for proper alignment */}
      <div className="row d-flex justify-content-center flex-wrap">
        {teamLeadsData[selectedSubsystem].length > 0 ? (
          teamLeadsData[selectedSubsystem].map((lead, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* 🛠 FIX: Centering image + name inside the front card */}
                  <div className="flip-card-front d-flex flex-column align-items-center justify-content-center">
                    <img src={lead.image} alt={lead.name} className="team-image" />
                    <h3 className="team-name">{lead.name}</h3>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <h3 className="team-name">{lead.name}</h3>
                    <p className="team-description">{lead.description}</p>
                    <a href={`mailto:${lead.email}`} className="email-link">📩 Contact</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-team">No team members available for this subsystem.</p>
        )}
      </div>
    </div>
  );
}

export default TeamLead;
