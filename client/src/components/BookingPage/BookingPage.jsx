import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "../LandingPage/services/services.jsx"; // Importing ServiceCard component
import BookingDetails from "./booking/BookingDetails.jsx"; // Importing BookingDetails component
import StylistCard from "../LandingPage/stylist/stylist.jsx"; // Importing StylistCard component

function BookingPage() {
const navigate = useNavigate();
const [services, setServices] = useState([]);
const [stylists, setStylists] = useState([]);
const [selectedService, setSelectedService] = useState(null);
const [selectedStylist, setSelectedStylist] = useState(null);
const [date, setDate] = useState("");
const [time, setTime] = useState("");

useEffect(() => {
fetch("/api/services")
    .then((response) => response.json())
    .then((data) => setServices(data));
fetch("/api/stylists")
    .then((response) => response.json())
    .then((data) => setStylists(data));
}, []);

function handleBooking() {
navigate("/checkout", {
    state: {
    service: selectedService,
    stylist: selectedStylist,
    date: date,
    time: time,
    },
});
}

return (
<section className="Booking-page">
    <h2>Book Your Appointment</h2>
    <div className="Booking-services">
    <h3>Services Provided</h3>
    <div className="Service-list">
        {services.map((service) => (
        <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
            price={service.price}
            onSelect={() => setSelectedService(service)}
        />
        ))}
    </div>
    </div>
    <BookingDetails date={date} setDate={setDate} time={time} setTime={setTime} />
    <div className="Booking-stylist">
    <h3>Choose Your Stylist</h3>
    <div className="Stylist-list">
        {stylists.map((stylist) => (
        <StylistCard
            key={stylist.id}
            name={stylist.name}
            specialty={stylist.specialty}
            imageUrl={stylist.imageUrl}
            onSelect={() => setSelectedStylist(stylist)}
        />
        ))}
    </div>
    </div>
    <button onClick={handleBooking}>Proceed to Checkout</button>
</section>
);
}

export default BookingPage;