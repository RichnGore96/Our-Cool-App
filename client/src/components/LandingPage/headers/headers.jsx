function Header() {
  return (
    <header className="App-header"> {/* Defining the header section with a class for styling */}
      <h1>Salon Don</h1> {/* Displaying the title of the salon */}
      <nav> {/* Defining the navigation menu */}
        <ul> {/* Unordered list for the navigation links */}
          <li><a href="#home">Home</a></li> {/* Link to the Home section */}
          <li><a href="#services">Services</a></li> {/* Link to the Services section */}
          <li><a href="#contact">Contact</a></li> {/* Link to the Contact section */}
        </ul>
      </nav>
    </header>
  );
}

export default Header; // Exporting the Header component as the default export