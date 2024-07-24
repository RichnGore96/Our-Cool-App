import React from "react"; // Importing the React library
import "./App.css"; // Importing the App.css file for styling
import Login from "./components/auth/login/Login";
import Landing from "./components/LandingPage/Landing"; // Importing the Landing component
import BookingPage from "./components/BookingPage/BookingPage"; // Importing Booking page component
import CheckoutPage from "./components/BookingPage/checkout/Checkout"; // Importing Checkout page component
import { Route, Routes } from "react-router-dom"; // Importing Route and Routes from react-router-dom for routing

/* 
 * The following imports are commented out.
 * These can be used for future enhancements or other components if needed.
 *
 * import Header from './components/LandingPage/headers/headers';
 * import HeroSection from './components/LandingPage/heroSection/heroSection';
 * import Services from './components/LandingPage/services/services';
 * import Stylists from './components/LandingPage/stylist/stylist';
 * import Location from './components/LandingPage/location/location';
 * import Footer from './components/LandingPage/footer/footer';
 */

function App() {
  return (
    <Routes> {/* Define the routes for the application */}
      <Route path="/" element={<Landing />} /> {/* Route for the Landing page */}
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App; // Exporting the App component as the default export
