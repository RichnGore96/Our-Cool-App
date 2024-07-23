import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Services from '../../LandingPage/services/services';

function ServiceHandler() {
const [selectedService, setSelectedService] = useState(null);
const navigate = useNavigate();

const handleServiceClick = (service) => {
setSelectedService(service);
navigate('/checkout', { state: { service } });
};

return <ServicesWithClickHandler onServiceClick={handleServiceClick} />;
}

function ServicesWithClickHandler({ onServiceClick }) {
const services = [
{ title: 'Haircut', description: 'Stylish haircuts tailored to your preferences.', imageUrl: 'https://via.placeholder.com/150' },
{ title: 'Hair Coloring', description: 'Professional hair coloring services for a new look.', imageUrl: 'https://via.placeholder.com/150' },
{ title: 'Hair Styling', description: 'Perfect hairstyles for any occasion.', imageUrl: 'https://via.placeholder.com/150' }
];

return (
<section className="Services-section">
    <h2>Our Services</h2>
    <div className="Service-cards">
    {services.map((service, index) => (
        <div key={index} className="Service-card" onClick={() => onServiceClick(service)}>
        <img src={service.imageUrl} alt={service.title} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        </div>
    ))}
    </div>
</section>
);
}

export default ServiceHandler;

