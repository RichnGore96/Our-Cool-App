function Location() {
    return (
      <section id="location" className="Location-section">
        <h2>Our Locations</h2>
        <div className="Location-cards">
          <LocationCard
            name="Location 1"
            address="123 Main Street, Harleen City, NC 12345"
            imageUrl="https://via.placeholder.com/150"
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
  
  function LocationCard({ name, address, imageUrl }) {
    return (
      <div className="Location-card">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
    );
  }
  export default Location