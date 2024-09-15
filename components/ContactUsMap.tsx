import React from 'react';

const ContactUsMap = () => {

  return (
    <div className="relative h-screen w-full" id='ContactUsMap'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.0536477026!2d-74.00601555850012!3d40.71277531928161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2f798d9779%3A0x80b82f86308e22a!2sNew%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sin!4v1636660733165!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      />
      <div
        className="absolute inset-0 cursor-pointer"
        style={{ zIndex: 10 }}
      ></div>
    </div>
  );
};

export default ContactUsMap;
