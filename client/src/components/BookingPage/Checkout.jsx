import React from 'react';
import Header from "../LandingPage/headers/headers";
import Footer from "../LandingPage/footer/footer";
import ServiceDetails from './ServiceDetails'; // Component to display selected service details
import PhotoUpload from './PhotoUpload'; // Component to handle photo uploads
import StylistSelection from './StylistSelection'; // Component for choosing a stylist
import LocationSelection from './LocationSelection'; // Component for choosing a location
import UserInformation from './UserInformation'; // Component for entering user details
import ConfirmButton from './ConfirmButton'; // Component for the confirm button

function CheckoutPage() {
    return (
        <>
            <div className="checkout-app">
                <Header />
                <div className="checkout-container">
                    <ServiceDetails />
                    <PhotoUpload />
                    <StylistSelection />
                    <LocationSelection />
                    <UserInformation />
                    <ConfirmButton />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default CheckoutPage;
