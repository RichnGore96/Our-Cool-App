import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useFormikContext } from 'formik';

const ConfirmButton = ({ onConfirm }) => {
    const { values, isSubmitting, setSubmitting } = useFormikContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        const emailParams = {
            service: values.service,
            price: values.price,
            ...values,
            images: values.images.map((file) => file.name).join(', '),
        };

        // Send email using emailjs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitting(false);
                navigate('/confirmation', { state: { values } });
            })
            .catch((error) => {
                console.log('FAILED...', error);
                setSubmitting(false);
            });
    };

    return (
        <button type="button" disabled={isSubmitting} onClick={handleSubmit}>
            Confirm Appointment
        </button>
    );
};

export default ConfirmButton;
