import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Contact Title */}
      <section className="contact-title">
        <h1>Contact Us</h1>
      </section>

      {/* Contact Information and Map Section */}
      <section className="contact-info">
        {/* Left side: Contact Details and Working Hours */}
        <div className="contact-left">
          <div className="contact-card">
            <h2>Contact Details</h2>
            <p><strong>Phone:</strong> +1-234-567-890</p>
            <p><strong>Email:</strong> support@healthassistant.com</p>
            <p><strong>Address:</strong> 123 Main St, Greenfield District, Springfield, IL</p>
          </div>

          <div className="contact-card">
            <h2>Working Hours</h2>
            <ul>
              <li>Monday to Friday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 10:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Right side: Location Map */}
        <div className="contact-right">
          <h2>Our Location</h2><iframe 
  src="https://www.google.com/maps/embed?pb=..." 
  style={{ border: '0' }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"   
/>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-cards">
          <div className="faq-card">
            <h3>How do I book a consultation?</h3>
            <p>You can book a consultation through our website by clicking the "Book Appointment" button or by calling our office directly.</p>
          </div>
          <div className="faq-card">
            <h3>What services do you offer?</h3>
            <p>We provide personalized health assistance, including diet planning, fitness routines, mental health counseling, and chronic disease management.</p>
          </div>
          <div className="faq-card">
            <h3>Are your services available online?</h3>
            <p>Yes, we offer both in-person and virtual consultations to cater to your needs.</p>
          </div>
          <div className="faq-card">
            <h3>Is my health data safe?</h3>
            <p>Absolutely. We follow strict data protection policies and comply with HIPAA regulations to ensure your data is secure and confidential.</p>
          </div>
          
          {/* New FAQ Entries */}
          <div className="faq-card">
            <h3>How can I cancel or reschedule my appointment?</h3>
            <p>You can cancel or reschedule your appointment through the link in your confirmation email or by contacting our office directly at least 24 hours in advance.</p>
          </div>
          <div className="faq-card">
            <h3>Do you offer any discounts or packages?</h3>
            <p>Yes, we offer various packages and discounts depending on the services you require. Please contact us for more information.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;