import React from 'react';
import './about.css';
export default function About() {
  return (
    <div id='about-section' style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>About Us</h1>

      <p style={{ lineHeight: '1.6', color: '#34495e', fontSize: '18px' }}>
        Welcome to our comprehensive health assistant application, your ultimate companion 
        for achieving your wellness goals! We are committed to empowering individuals by providing
        personalized workout routines, tailored diet plans, and holistic wellness recommendations 
        designed to suit your unique needs.
      </p>

      <h2 style={{ color: '#16a085' }}>Our Vision</h2>
      <p style={{ lineHeight: '1.6', color: '#34495e', fontSize: '18px' }}>
        Our vision is to create a healthier world by leveraging the power of AI and technology. 
        We believe everyone deserves access to tools that enhance their fitness journey, promote
        better habits, and improve overall quality of life.
      </p>

      <h2 style={{ color: '#16a085' }}>Key Features</h2>
      <ul style={{ lineHeight: '1.8', color: '#34495e', fontSize: '18px' }}>
        <li>AI-Powered Tailored Workout Routines: Receive workouts customized to your fitness level and goals.</li>
        <li>Personalized Diet Plans: Get meal suggestions designed to match your nutritional needs and preferences.</li>
        <li>Wellness Recommendations: Access tips and insights to maintain a healthy lifestyle.</li>
        <li>Real-Time Progress Tracking: Monitor your achievements and milestones with ease.</li>
        <li>Motivational Feedback: Stay inspired with timely encouragement and insights to keep you on track.</li>
      </ul>

      <h2 style={{ color: '#16a085' }}>Why Choose Us?</h2>
      <p style={{ lineHeight: '1.6', color: '#34495e', fontSize: '18px' }}>
        We understand that every individual is unique, and so are their health and fitness needs. 
        Our platform uses cutting-edge AI technology to analyze your profile, preferences, and goals,
        delivering a personalized experience that evolves with you. Whether you’re just starting your 
        wellness journey or looking to take it to the next level, we’re here to guide you every step 
        of the way.
      </p>

      <h2 style={{ color: '#16a085' }}>Join Us Today!</h2>
      <p style={{ lineHeight: '1.6', color: '#34495e', fontSize: '18px' }}>
        Embark on a transformative journey toward better health and wellness. Let’s achieve greatness together!
      </p>
    </div>
  );
}
