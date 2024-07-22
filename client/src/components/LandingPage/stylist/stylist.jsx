function Stylists() {
  return (
    <section id="stylists" className="Stylists-section"> {/* Defining the Stylists section with an id and class for styling */}
      <h2>Meet Our Stylists</h2> {/* Heading for the stylists section */}
      <div className="Stylist-cards"> {/* Container for the stylist cards */}
        <StylistCard
          name="Jane Doe"
          specialty="Haircut Specialist"
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for Jane Doe's stylist card
        />
        <StylistCard
          name="John Smith"
          specialty="Color Expert"
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for John Smith's stylist card
        />
        <StylistCard
          name="Alice Johnson"
          specialty="Styling Guru"
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for Alice Johnson's stylist card
        />
        <StylistCard
          name="Jane Smith"
          specialty="Color Expert"
          imageUrl="https://static.vecteezy.com/system/resources/previews/003/695/380/non_2x/stylist-hairdresser-holds-strand-for-hair-extensions-hair-lengthening-woman-with-hairdressing-tools-stylist-by-profession-it-can-be-used-for-beauty-website-blogs-of-hairdresser-colorist-vector.jpg" // Image URL for Jane Smith's stylist card
        />
      </div>
    </section>
  );
}

function StylistCard({ name, specialty, imageUrl }) { // Destructuring props for the StylistCard component
  return (
    <div className="Stylist-card"> {/* Defining the individual stylist card with a class for styling */}
      <img src={imageUrl} alt={name} /> {/* Displaying the stylist image */}
      <h3>{name}</h3> {/* Displaying the stylist's name */}
      <p>{specialty}</p> {/* Displaying the stylist's specialty */}
    </div>
  );
}

export default Stylists; // Exporting the Stylists component as the default export