import React, { useState } from 'react';
import './userinput.css';
export default function Userinput() {
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('usname');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');
  const [goal,setgoal]=useState('');
  const [problems,setproblems]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if ( !age || !weight || !height || !gender) {
      setMessage('Please fill in all fields.');
      return;
    }
  
    const numericAge = parseInt(age, 10);
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);
  
    const airtableUrl = `https://api.airtable.com/v0/appfQNmAs6vTN5iAn/userinputs`;
    const apiKey = 'pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061';
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };
    const data = {
      "records": [
        {
          "fields": {
            "Name": storedName,
            "email": storedEmail,
            "Age": numericAge,
            "Weight": numericWeight,
            "Hieght": numericHeight,
            "Gender":gender,
            "goal":goal
          }
        }
      ]
    };
  
    fetch(airtableUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setMessage('Your data has been saved successfully!');
    })
    .catch(error => {
      console.error(error);
      setMessage('Error saving your data. Please try again.');
    });
  };
  
  return (
    <div id='userinput-section'>
      <h2>User Input Form</h2>
      <form onSubmit={handleSubmit}>
       <input type="number" placeholder="Enter Your Age" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="number" placeholder="Enter Your Height" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Enter Your Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label> Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </label>
        
        <input type="text" placeholder="Enter Your Health Problems" value={problems} onChange={(e) => setproblems(e.target.value)} />
        
        <input type="text" placeholder="Enter Your Goal" value={goal} onChange={(e) => setgoal(e.target.value)} />
       
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
