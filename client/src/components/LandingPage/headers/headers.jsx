/*function Header() {

    
    return(
        <header>
            <h1>Salon Don</h1>
        </header>
    )
}

export default Header;
*/

function Header() {
    return (
      <header className="App-header">
        <h1>Salon Don</h1>
        <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
      </header>
    );
  }

  export default Header;
