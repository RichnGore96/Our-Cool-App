function Location() {
<<<<<<< HEAD
    return (
      <section id="location" className="Location-section">
        <h2>Our Location</h2>
        <p>123 Main Street, Harleen City, NC 12345</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093157!2d144.95565131592215!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727db776f4111a!2sRMIT+University!5e0!3m2!1sen!2sau!4v1532587296185"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </section>
    );
  }
  export default Location
=======
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
>>>>>>> f37b3ca5c3d86df43bbdc4707878ee2694619ece
