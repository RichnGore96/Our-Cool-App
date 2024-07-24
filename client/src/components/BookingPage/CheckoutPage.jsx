import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const CheckoutPage = () => {
const location = useLocation();
const navigate = useNavigate();
const { service } = location.state || { service: {} };
const [images, setImages] = useState([]);

const handleImageChange = (event) => {
setImages([...event.target.files]);
};

const initialValues = {
name: '',
email: '',
phone: '',
stylist: '',
location: '',
date: '',
time: '',
};

const validationSchema = Yup.object({
name: Yup.string().required('Required'),
email: Yup.string().email('Invalid email format').required('Required'),
phone: Yup.string().required('Required'),
stylist: Yup.string().required('Required'),
location: Yup.string().required('Required'),
date: Yup.string().required('Required'),
time: Yup.string().required('Required'),
});

const handleSubmit = (values, { setSubmitting }) => {
const emailParams = {
    service: service.title,
    price: service.price,
    ...values,
    images: images.map((file) => file.name).join(', '),
};

// Send email using emailjs (replace with your emailjs service ID and template ID)
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
    .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setSubmitting(false);
    navigate('/confirmation', { state: { values, service, images } });
    })
    .catch((error) => {
    console.log('FAILED...', error);
    setSubmitting(false);
    });
};

return (
<div>
    <h2>Checkout</h2>
    <div>
    <h3>Selected Service</h3>
    <p>Title: {service.title}</p>
    <p>Description: {service.description}</p>
    <p>Price: ${service.price}</p>
    <img src={service.imageUrl} alt={service.title} />
    </div>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
    {({ isSubmitting }) => (
        <Form>
        <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
        </div>
        <div>
            <label htmlFor="phone">Phone</label>
            <Field type="text" name="phone" />
            <ErrorMessage name="phone" component="div" />
        </div>
        <div>
            <label htmlFor="stylist">Stylist</label>
            <Field as="select" name="stylist">
            <option value="">Select Stylist</option>
            <option value="Jane Doe">Jane Doe</option>
            <option value="John Smith">John Smith</option>
            <option value="Alice Johnson">Alice Johnson</option>
            </Field>
            <ErrorMessage name="stylist" component="div" />
        </div>
        <div>
            <label htmlFor="location">Location</label>
            <Field as="select" name="location">
            <option value="">Select Location</option>
            <option value="Location 1">123 Main Street, New York, NY 10001</option>
            <option value="Location 2">456 Main Street, Harleen City, NC 12345</option>
            <option value="Location 3">789 Main Street, Harleen City, NC 12345</option>
            </Field>
            <ErrorMessage name="location" component="div" />
        </div>
        <div>
            <label htmlFor="date">Date</label>
            <Field type="date" name="date" />
            <ErrorMessage name="date" component="div" />
        </div>
        <div>
            <label htmlFor="time">Time</label>
            <Field type="time" name="time" />
            <ErrorMessage name="time" component="div" />
        </div>
        <div>
            <label htmlFor="images">Upload Photos</label>
            <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
        </div>
        <button type="submit" disabled={isSubmitting}>Confirm Appointment</button>
        </Form>
    )}
    </Formik>
</div>
);
};

export default CheckoutPage;
