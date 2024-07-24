import React from 'react';
import { Field, ErrorMessage } from 'formik';

const UserInformation = ({ onUserInfoSubmit }) => {
    return (
        <>
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
                <label htmlFor="date">Date</label>
                <Field type="date" name="date" />
                <ErrorMessage name="date" component="div" />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <Field type="time" name="time" />
                <ErrorMessage name="time" component="div" />
            </div>
        </>
    );
};

export default UserInformation;
