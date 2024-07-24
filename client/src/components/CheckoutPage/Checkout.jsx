import React from 'react';
import Header from "../LandingPage/headers/headers";
import Footer from "../LandingPage/footer/footer";
import ServiceDetails from '../LandingPage/services/services'; // Component to display selected service details
import PhotoUpload from './photo/PhotoUpload'; // Component to handle photo uploads
import StylistSelection from '../LandingPage/stylist/stylist'; // Component for choosing a stylist
import LocationSelection from '../LandingPage/location/location'; // Component for choosing a location
import UserInformation from './userinfo/UserInfo'; // Component for entering user details
import ConfirmButton from './confirm/ConfirmButton'; // Component for the confirm button

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
