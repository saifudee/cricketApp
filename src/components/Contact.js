/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div className="col m-2">
        <h3>ContactUs</h3>
        <hr></hr>
        <ul>
        <i class="fa-solid fa-phone"></i> Mobile:<strong> +91 9840537892, +91 9840398187</strong>
          <br></br>
          <i class="fa-solid fa-envelope"></i> Email:
          <strong> coachsuresh3@gmail.com</strong>
          <br></br>
          <i class="fa-solid fa-location-dot"></i> <strong> Venue: </strong> SKR Aports Association
          <br></br>
          <strong>Loaction:</strong>
          88/7,Thudiyalur Road,Saravanampatti,Coimbatore,TamilNadu 641035
          <br></br>
          <strong>Batch Timing:</strong>
          <h6>Monday to Friday </h6>
          <h6>Morning: 6.00 am to 8.00 am</h6>
          <h6>Evening: 4.00 pm to 6.00 pm </h6>
        </ul>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.416507882499!2d76.98433397460687!3d11.082303453478183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7bfe6a28ad7%3A0xf7264ee9e6c5154b!2s88%2F7%2C%20Thudiyalur%20Rd%2C%20opp.%20to%20Sankara%20College%2C%20Saravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641035!5e0!3m2!1sen!2sin!4v1692879964955!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
