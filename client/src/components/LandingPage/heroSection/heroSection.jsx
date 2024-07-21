import React from "react";
import { useNavigate } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate;

  function handleSubmit() {
    navigate("/appointments")
  }
  return (
    <section className="Hero-section">
      <h2>Welcome to Salon Don</h2>
      <p>Your ultimate destination for all hairstyles</p>
      <button onClick={handleSubmit}>Book Now</button>
    </section>
  );
}
export default HeroSection;
