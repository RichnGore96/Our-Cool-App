

function Stylists() {
    return (
      <section id="stylists" className="Stylists-section">
        <h2>Meet Our Stylists</h2>
        <div className="Stylist-cards">
          <StylistCard
            name="John Doe"
            specialty="Haircut Specialist"
            imageUrl="https://thumbs.dreamstime.com/z/barbershop-hairdresser-pop-art-vector-portrait-shoulder-bearded-hipster-man-wearing-apron-holding-scissors-combs-143123268.jpg?ct=jpeg"
          />
          <StylistCard
            name="Jane Smith"
            specialty="Color Expert"
            imageUrl="https://static.vecteezy.com/system/resources/previews/003/695/380/non_2x/stylist-hairdresser-holds-strand-for-hair-extensions-hair-lengthening-woman-with-hairdressing-tools-stylist-by-profession-it-can-be-used-for-beauty-website-blogs-of-hairdresser-colorist-vector.jpg"
           />
          <StylistCard
            name="Alice Johnson"
            specialty="Styling Guru"
            imageUrl="https://www.shutterstock.com/shutterstock/photos/228880234/display_1500/stock-vector-cute-girl-hairdresser-with-hair-dryer-and-hairbrush-isolated-on-a-white-background-228880234.jpg"
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