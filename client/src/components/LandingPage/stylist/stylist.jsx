function Stylists() {
    return (
      <section id="stylists" className="Stylists-section">
        <h2>Meet Our Stylists</h2>
        <div className="Stylist-cards">
          <StylistCard
            name="Jane Doe"
            specialty="Haircut Specialist"
            imageUrl="https://i.pinimg.com/474x/e3/7b/c2/e37bc2b389abcbc571cd34fc896da148.jpg"
          />
          <StylistCard
            name="John Smith"
            specialty="Color Expert"
            imageUrl="https://c8.alamy.com/comp/T58PRA/barber-man-in-hipster-style-holding-hairdressers-tools-handsome-cartoon-character-beard-shave-service-vector-illustration-isolated-on-white-backgr-T58PRA.jpg "        
            />
          <StylistCard
            name="Alice Johnson"
            specialty="Styling Guru"
            imageUrl="https://www.shutterstock.com/image-vector/beautiful-redhead-girl-hairdresser-holds-600nw-1770114167.jpg"
          />
          <StylistCard
            name="Jane Smith"
            specialty="Color Expert"
            imageUrl="https://c8.alamy.com/comp/M9M914/hairdresser-woman-in-professional-uniform-beautiful-lady-stylist-cartoon-character-holds-tools-for-hair-coloring-vector-illustration-on-white-backgr-M9M914.jpg"
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