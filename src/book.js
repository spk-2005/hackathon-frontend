import React, { useState } from 'react';
import './bookappointment.css';

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    issue: '',
    mobile: '',
    doctor: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment booked successfully for ${formData.name}!`);

    // Reset form fields
    setFormData({
      name: '',
      age: '',
      issue: '',
      mobile: '',
      doctor: '',
    });
  };

  return (
    <div className="form-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Issue:
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile No:
          <input
            type="tel"
            name="mobile"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Select Doctor:
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">--Choose a specialist--</option>
            <option value="cardiologist">Cardiologist</option>
            <option value="dermatologist">Dermatologist</option>
            <option value="neurologist">Neurologist</option>
            <option value="orthopedic">Orthopedic</option>
          </select>
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Book;
