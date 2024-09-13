import React from 'react';
import aboutimg1 from "./Assets/About-1.svg";

function About() {
  return (
    <div
      className="absolute inset-0 h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutimg1})`,
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default About;
