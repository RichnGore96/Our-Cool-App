import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
const location = useLocation();
const { values, service, images } = location.state;

return (
<div>
    <h2>Appointment Confirmation</h2>
    <div>
    <h3>Appointment Details</h3>
    <p>Service: {service.title}</p>
    <p>Price: ${service.price}</p>
    <p>Name: {values.name}</p>
    <p>Email: {values.email}</p>
    <p>Phone: {values.phone}</p>
    <p>Stylist: {values.stylist}</p>
    <p>Location: {values.location}</p>
    <p>Date: {values.date}</p>
    <p>Time: {values.time}</p>
    <div>
        <h4>Uploaded Photos</h4>
        {images && images.length > 0 && (
        <div>
            {images.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt="User Upload" style={{ width: '150px', margin: '10px' }} />
            ))}
        </div>
        )}
    </div>
    </div>
</div>
);
};

export default ConfirmationPage;
