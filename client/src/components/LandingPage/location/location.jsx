function Location() {
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