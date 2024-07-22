function Location() {
  return (
    <section id="location" className="Location-section"> {/* Defining the Location section with an id and class for styling */}
      <h2>Our Locations</h2> {/* Heading for the locations section */}
      <div className="Location-cards"> {/* Container for the location cards */}
        <LocationCard
          name="Location 1"
          address="123 Main Street, New York, NY 10001"
          mapUrl={
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.8201395222545!2d-73.21433242377927!3d44.47785937107499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca7b6ed179957f%3A0x9dc0495b89092079!2sBourbon%20Street%20LLC!5e0!3m2!1sen!2sus!4v1721454501919!5m2!1sen!2sus"
              width="800"
              height="600"
              style="border:0;" // Inline styling for the iframe border
              allowfullscreen="" // Allow full screen for the iframe
              loading="lazy" // Lazy loading the iframe
              referrerpolicy="no-referrer-when-downgrade" // Referrer policy for the iframe
            ></iframe>
          } // Map URL for the first location card
        />
        <LocationCard
          name="Location 2"
          address="456 Main Street, Harleen City, NC 12345"
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for the second location card
        />
        <LocationCard
          name="Location 3"
          address="789 Main Street, Harleen City, NC 12345"
          imageUrl="https://via.placeholder.com/150" // Placeholder image URL for the third location card
        />
      </div>
    </section>
  );
}

function LocationCard({ name, address, mapUrl, imageUrl }) { // Destructuring props for the LocationCard component
  return (
    <div className="Location-card"> {/* Defining the individual location card with a class for styling */}
      {mapUrl ? (
        mapUrl // Rendering the map iframe if mapUrl is provided
      ) : (
        <img src={imageUrl} alt={name} /> // Rendering an image if mapUrl is not provided
      )}
      <h3>{name}</h3> {/* Displaying the location name */}
      <p>{address}</p> {/* Displaying the location address */}
    </div>
  );
}

export default Location; // Exporting the Location component as the default export
