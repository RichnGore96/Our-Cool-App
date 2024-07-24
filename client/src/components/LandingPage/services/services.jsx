function Services() {
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

  export default Services;