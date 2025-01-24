import React, { useState } from 'react';
import './articles-and-blogs.css';

function ArticlesAndBlogs() {
  const diseases = [
    { name: 'Diabetes', symptoms: 'Frequent urination, increased thirst, fatigue', prevention: 'Healthy diet, regular exercise, maintain weight' },
    { name: 'Hypertension', symptoms: 'Headache, shortness of breath, chest pain', prevention: 'Low-salt diet, regular exercise, manage stress' },
    { name: 'Flu', symptoms: 'Fever, cough, sore throat, fatigue', prevention: 'Vaccination, hand hygiene, avoid crowds' },
    { name: 'Asthma', symptoms: 'Shortness of breath, chest tightness, wheezing', prevention: 'Avoid triggers, use inhalers, regular checkups' },
    { name: 'COVID-19', symptoms: 'Fever, cough, difficulty breathing, loss of taste/smell', prevention: 'Vaccination, wear masks, hand hygiene' },
    { name: 'Arthritis', symptoms: 'Joint pain, stiffness, swelling', prevention: 'Regular exercise, healthy weight, joint protection' },
    { name: 'Migraine', symptoms: 'Severe headache, nausea, light sensitivity', prevention: 'Avoid triggers, regular sleep, stress management' },
    { name: 'Obesity', symptoms: 'Excess body fat, fatigue, breathing difficulties', prevention: 'Healthy diet, regular exercise, behavior changes' },
    { name: 'Depression', symptoms: 'Sadness, loss of interest, sleep issues', prevention: 'Therapy, physical activity, social support' },
    { name: 'Anemia', symptoms: 'Fatigue, weakness, pale skin', prevention: 'Iron-rich diet, vitamin supplements, regular checkups' },
  ];

  const [selectedDisease, setSelectedDisease] = useState(null);

  const handleSelectChange = (event) => {
    const selected = diseases.find((disease) => disease.name === event.target.value);
    setSelectedDisease(selected);
  };

  return (
    <div className="articles-and-blogs">
      <h1>Articles and Blogs</h1>
      <p>Select a disease to view symptoms and preventions:</p>

      <div className="dropdown-container">
        <select onChange={handleSelectChange} className="dropdown">
          <option value="">--Select a Disease--</option>
          {diseases.map((disease) => (
            <option key={disease.name} value={disease.name}>
              {disease.name}
            </option>
          ))}
        </select>
      </div>

      {selectedDisease && (
        <div className="card">
          <h2>{selectedDisease.name}</h2>
          <p><strong>Symptoms:</strong> {selectedDisease.symptoms}</p>
          <p><strong>Prevention:</strong> {selectedDisease.prevention}</p>
        </div>
      )}
    </div>
  );
}

export default ArticlesAndBlogs;