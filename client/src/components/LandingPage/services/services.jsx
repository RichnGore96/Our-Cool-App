function Services() {
  return (
    <section className="Services-section"> {/* Defining the Services section with a class for styling */}
      <h2>Our Services</h2> {/* Heading for the services section */}
      <div className="Service-cards"> {/* Container for the service cards */}
        <ServiceCard
          title="Haircut"
          description="Stylish haircuts tailored to your preferences."
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for the haircut service card
        />
        <ServiceCard
          title="Hair Coloring"
          description="Professional hair coloring services for a new look."
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for the hair coloring service card
        />
        <ServiceCard
          title="Hair Styling"
          description="Perfect hairstyles for any occasion."
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for the hair styling service card
        />
      </div>
    </section>
  );
}

function ServiceCard({ title, description, imageUrl }) { // Destructuring props for the ServiceCard component
  return (
    <div className="Service-card"> {/* Defining the individual service card with a class for styling */}
      <img src={imageUrl} alt={title} /> {/* Displaying the service image */}
      <h3>{title}</h3> {/* Displaying the service title */}
      <p>{description}</p> {/* Displaying the service description */}
    </div>
  );
}

export default Services; // Exporting the Services component as the default export