function Location() {
   
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
export default Location;
