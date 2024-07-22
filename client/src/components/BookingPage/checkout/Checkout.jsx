import React from "react";
import { useLocation } from "react-router-dom";
import AppointmentDetails from "../appointments/AppointmentDetails"; // Importing AppointmentDetails component
import UserDetails from "../user/UserDetails"; // Importing UserDetails component

function CheckoutPage() {
const location = useLocation();
const { service, stylist, date, time } = location.state;

function handleSubmit(event) {
event.preventDefault();
const formData = new FormData(event.target);

const data = {
    serviceId: service.id,
    stylistId: stylist.id,
    date: date,
    time: time,
    userName: formData.get("name"),
    userEmail: formData.get("email"),
    userPhone: formData.get("phone"),
    userPhoto: formData.get("photo"),
};

fetch("/api/bookings", {
    method: "POST",
    body: formData,
}).then((response) => {
    if (response.status === 200) {
    alert("Appointment booked successfully!");
    }
});
}

return (
<section className="Checkout-page">
    <h2>Checkout</h2>
    <AppointmentDetails service={service} stylist={stylist} date={date} time={time} />
    <UserDetails handleSubmit={handleSubmit} />
</section>
);
}

export default CheckoutPage;
