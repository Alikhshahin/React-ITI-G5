import React from "react";

const teamMembers = [
  {
    name: "Ali Shahin",
    role: "CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Shahin",
    role: "CTO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ali Shahin",
    role: "CFO",
    image: "https://via.placeholder.com/150",
  },
];

function About() {
  return (
    <div>
      <h2 className="text-center mb-4">Meet Our Team</h2>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 shadow-sm">
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
