import React from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
    return (
      <header className="App-header">
        <h1>Salon Don</h1>
        <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
      </header>
    );
  }


 

export function HeroSection() {

  const navigate = useNavigate;

  function handleSubmit() {
    navigate("/appointments")

    return (
      <section className="Hero-section">
        <h2>Welcome to Salon Don</h2>
        <p>Your ultimate destination for all hairstyles</p>
        <p>Welcome to Salon Don, where elegance and expertise converge to offer you a truly exceptional experience. Nestled in a chic and modern setting, our upscale salon provides a comprehensive range of services, from cutting-edge haircuts and color treatments to luxurious spa therapies. Our highly skilled and passionate team is dedicated to delivering personalized attention and top-notch service, using only premium, eco-friendly products. At Salon Don, we pride ourselves on creating a welcoming and tranquil ambiance, ensuring each visit leaves you feeling pampered, rejuvenated, and transformed. Discover the difference at Salon Don, where your satisfaction is our utmost priority.</p>
        <p>Book your appointment today!</p>
        <button>Book Now</button>
      </section>
      
    );

  }
  return (
    <section className="Hero-section">
      <h2>Welcome to Salon Don</h2>
      <p>Your ultimate destination for all hairstyles</p>
      <button onClick={handleSubmit}>Book Now</button>
    </section>
  );
}


export function Services() {
    return (
      <section className="Services-section">
        <h2>Our Services</h2>
        <div className="Service-cards">
          <ServiceCard
            title="Haircut"
            description="Stylish haircuts tailored to your preferences."
            imageUrl="https://via.placeholder.com/150"
          />
          <ServiceCard
            title="Hair Coloring"
            description="Professional hair coloring services for a new look."
            imageUrl="https://via.placeholder.com/150"
          />
          <ServiceCard
            title="Hair Styling"
            description="Perfect hairstyles for any occasion."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </section>
    );
  }
  function ServiceCard({ title, description, imageUrl }) {
    return (
      <div className="Service-card">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }



export function Stylists() {
    return (
      <section id="stylists" className="Stylists-section">
        <h2>Meet Our Stylists</h2>
        <div className="Stylist-cards">
          <StylistCard
            name="Jane Doe"
            specialty="Haircut Specialist"
            imageUrl="https://via.placeholder.com/150"
          />
          <StylistCard
            name="John Smith"
            specialty="Color Expert"
            imageUrl="https://via.placeholder.com/150"
          />
          <StylistCard
            name="Alice Johnson"
            specialty="Styling Guru"
            imageUrl="https://via.placeholder.com/150"
          />
          <StylistCard
            name="Jane Smith"
            specialty="Color Expert"
            imageUrl="https://static.vecteezy.com/system/resources/previews/003/695/380/non_2x/stylist-hairdresser-holds-strand-for-hair-extensions-hair-lengthening-woman-with-hairdressing-tools-stylist-by-profession-it-can-be-used-for-beauty-website-blogs-of-hairdresser-colorist-vector.jpg"
          />
        </div>
      </section>
    );
  }
  
  function StylistCard({ name, specialty, imageUrl }) {
    return (
      <div className="Stylist-card">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{specialty}</p>
      </div>
    );
  }
  


export function Location() {
   
  return (
    <section id="location" className="Location-section">
      <h2>Our Locations</h2>
      <div className="Location-cards">
        <LocationCard
          name="Location 1"
          address="123 Main Street, New York, NY 10001"
          mapUrl={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.8201395222545!2d-73.21433242377927!3d44.47785937107499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7b6ed179957f%3A0x9dc0495b89092079!2sBourbon%20Street%20LLC!5e0!3m2!1sen!2sus!4v1721454501919!5m2!1sen!2sus"
              width="800"
              height="600"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }
        />
        <LocationCard
          name="Location 2"
          address="456 Main Street, Harleen City, NC 12345"
          imageUrl="https://via.placeholder.com/150"
        />
        <LocationCard
          name="Location 3"
          address="789 Main Street, Harleen City, NC 12345"
          imageUrl="https://via.placeholder.com/150"
        />
      </div>
    </section>
  );
}

 function LocationCard({ name, address, mapUrl }) {
  return (
    <div className="Location-card">
      <map src={mapUrl} alt={name} />
      <h3>{name}</h3>
      <p>{address}</p>
    </div>
  );
}



export function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <h6> Salon Don Copyright {currentYear} &copy;</h6>
    )
}

 