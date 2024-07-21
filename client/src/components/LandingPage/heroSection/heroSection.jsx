import React from "react";
import { useNavigate } from "react-router-dom";
function HeroSection() {
<<<<<<< HEAD
  const navigate = useNavigate;

  function handleSubmit() {
    navigate("/appointments")
=======
    return (
      <section className="Hero-section">
        <h2>Welcome to Salon Don</h2>
<<<<<<< HEAD
        <p>Your ultimate destination for all hairstyles</p>
=======
        <p>Welcome to Salon Don, where elegance and expertise converge to offer you a truly exceptional experience. Nestled in a chic and modern setting, our upscale salon provides a comprehensive range of services, from cutting-edge haircuts and color treatments to luxurious spa therapies. Our highly skilled and passionate team is dedicated to delivering personalized attention and top-notch service, using only premium, eco-friendly products. At Salon Don, we pride ourselves on creating a welcoming and tranquil ambiance, ensuring each visit leaves you feeling pampered, rejuvenated, and transformed. Discover the difference at Salon Don, where your satisfaction is our utmost priority.</p>
        <p>Book your appointment today!</p>
>>>>>>> f37b3ca5c3d86df43bbdc4707878ee2694619ece
        <button>Book Now</button>
      </section>
      
    );
>>>>>>> dee29e8e69ccdc1db83d1f3a1afba49e68f5491c
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
