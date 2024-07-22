import React from "react"; // Importing the React library
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom for navigation

function HeroSection() {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  function handleSubmit() { // Defining the handleSubmit function to navigate to the appointments page
    navigate("/appointments"); // Navigating to the /appointments route

    return ( // This return statement is misplaced and will never be executed; it should be removed
      <section className="Hero-section"> {/* Defining the Hero section with a class for styling */}
        <h2>Welcome to Salon Don</h2> {/* Displaying the welcome message */}
        <p>Your ultimate destination for all hairstyles</p> {/* Short description */}
        <p>
          Welcome to Salon Don, where elegance and expertise converge to offer you a truly exceptional experience. Nestled in a chic and modern setting, our upscale salon provides a comprehensive range of services, from cutting-edge haircuts and color treatments to luxurious spa therapies. Our highly skilled and passionate team is dedicated to delivering personalized attention and top-notch service, using only premium, eco-friendly products. At Salon Don, we pride ourselves on creating a welcoming and tranquil ambiance, ensuring each visit leaves you feeling pampered, rejuvenated, and transformed. Discover the difference at Salon Don, where your satisfaction is our utmost priority.
        </p> {/* Detailed description */}
        <p>Book your appointment today!</p> {/* Encouraging to book an appointment */}
        <button>Book Now</button> {/* Booking button */}
      </section>
    );
  }

  return ( // Correct return statement for rendering the Hero section
    <section className="Hero-section"> {/* Defining the Hero section with a class for styling */}
      <h2>Welcome to Salon Don</h2> {/* Displaying the welcome message */}
      <p>Your ultimate destination for all hairstyles</p> {/* Short description */}
      <button onClick={handleSubmit}>Book Now</button> {/* Booking button with an onClick event to handleSubmit */}
    </section>
  );
}

export default HeroSection; // Exporting the HeroSection component as the default export
