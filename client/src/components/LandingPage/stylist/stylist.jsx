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

export default Stylists;
