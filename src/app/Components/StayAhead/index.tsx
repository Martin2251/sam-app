// components/ContactForm.tsx
"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    privacyPolicy: Yup.boolean().oneOf([true], 'You must accept the privacy policy'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      privacyPolicy: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission here (e.g., send data to server)
      console.log(values);
      setSubmitted(true);
    },
  });

  return (
    <div>
      {submitted ? (
        <p className="text-green-600">Form submitted successfully!</p>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className="text-red-500">{formik.errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className="text-red-500">{formik.errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="privacyPolicy" className="flex items-center">
              <input
                type="checkbox"
                id="privacyPolicy"
                className="mr-2"
                {...formik.getFieldProps('privacyPolicy')}
              />
              <span className="text-gray-700">I accept the privacy policy</span>
            </label>
            {formik.touched.privacyPolicy && formik.errors.privacyPolicy && (
              <p className="text-red-500">{formik.errors.privacyPolicy}</p>
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
