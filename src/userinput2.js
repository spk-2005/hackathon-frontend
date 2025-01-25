import React, { useState } from 'react';

export default function Userinput2() {
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('usname');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');
    const [goal, setGoal] = useState('');
    const [problems, setProblems] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!age || !weight || !height || !gender) {
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
                        "Gender": gender,
                        "goal": goal
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
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <input type="text" placeholder="Enter Your Health Problems" value={problems} onChange={(e) => setProblems(e.target.value)} />
                <input type="text" placeholder="Enter Your Goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}

            <style jsx>{`
                #userinput-section {
                    background-color: #f9f9f9;
                    padding: 40px 20px;
                    max-width: 600px;
                    margin: 0 auto;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    font-family: 'Arial', sans-serif;
                    transition: all 0.3s ease;
                }

                #userinput-section h2 {
                    text-align: center;
                    font-size: 2rem;
                    color: #333;
                    margin-bottom: 30px;
                    animation: fadeInUp 1s ease-out;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                input[type="number"],
                input[type="text"],
                select {
                    padding: 12px 15px;
                    font-size: 1rem;
                    border: 2px solid #ddd;
                    border-radius: 6px;
                    outline: none;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                input[type="number"]:focus,
                input[type="text"]:focus,
                select:focus {
                    border-color: #4CAF50;
                    box-shadow: 0 0 5px rgba(76, 175, 80, 0.2);
                }

                button {
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 12px 20px;
                    font-size: 1.1rem;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.2s ease;
                }

                button:hover {
                    background-color: #45a049;
                    transform: scale(1.05);
                }

                button:active {
                    background-color: #388e3c;
                }

                p {
                    text-align: center;
                    font-size: 1.1rem;
                    color: #333;
                    font-weight: bold;
                    margin-top: 20px;
                    animation: fadeInUp 1s ease-out;
                }

                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                label {
                    font-size: 1rem;
                    color: #555;
                    margin-bottom: 5px;
                    transition: color 0.3s ease;
                }

                label:hover {
                    color: #4CAF50;
                }

                @media (max-width: 768px) {
                    #userinput-section {
                        padding: 20px 15px;
                        max-width: 100%;
                    }

                    #userinput-section h2 {
                        font-size: 1.8rem;
                    }

                    input[type="number"],
                    input[type="text"],
                    select {
                        font-size: 1rem;
                    }

                    button {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
}
