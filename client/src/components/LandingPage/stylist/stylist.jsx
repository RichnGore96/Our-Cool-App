

function Stylists() {
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
  
  export default Stylists;