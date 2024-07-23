import React from 'react';
import Header from '../LandingPage/headers/headers';
import Footer from '../LandingPage/footer/footer';
import ServiceHandler from './service/ServiceHandler';

function BookingPage() {
return (
<>
    <div className="app">
    <Header />
    <ServiceHandler />
    <Footer />
    </div>
</>
);
}

export default BookingPage;
