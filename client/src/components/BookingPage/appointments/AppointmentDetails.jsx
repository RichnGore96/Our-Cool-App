import React from "react";

function AppointmentDetails({ service, stylist, date, time }) {
return (
<div className="Appointment-details">
    <h3>Appointment Details</h3>
    <p>Service: {service.name}</p>
    <p>Stylist: {stylist.name}</p>
    <p>Date: {date}</p>
    <p>Time: {time}</p>
</div>
);
}

export default AppointmentDetails;
