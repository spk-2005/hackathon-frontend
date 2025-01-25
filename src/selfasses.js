import React, { useState } from 'react';
import './selfasses.css';  // Import the CSS file

export default function Selfasses() {
  // State to store user answers
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: ''
  });

  // State to store the result
  const [result, setResult] = useState('');

  // Function to handle answer change
  const handleAnswerChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };

  // Function to calculate the result after submitting the quiz
  const calculateResult = () => {
    let score = 0;
    
    // Example scoring logic based on the answers (this can be customized)
    if (answers.question1 === 'Very often') score++;
    if (answers.question2 === 'No') score++;
    if (answers.question3 === 'Yes') score++;
    if (answers.question4 === 'Sometimes') score++;
    if (answers.question5 === 'Never') score++;
    
    if (score >= 4) {
      setResult('You are doing great! Keep taking care of your mental health.');
    } else if (score >= 2) {
      setResult('You may want to consider some strategies to improve your mental well-being.');
    } else {
      setResult('It might be helpful to talk to a mental health professional.');
    }
  };

  return (
    <div className="selfasses-container">
      <h2>Mental Health Self-Assessment</h2>
      <div className="questions">
        <div className="question">
          <p>1. How often do you feel stressed or overwhelmed?</p>
          <select onChange={(e) => handleAnswerChange('question1', e.target.value)} value={answers.question1}>
            <option value="">Select an answer</option>
            <option value="Very often">Very often</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="question">
          <p>2. Do you have trouble sleeping due to stress?</p>
          <select onChange={(e) => handleAnswerChange('question2', e.target.value)} value={answers.question2}>
            <option value="">Select an answer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="question">
          <p>3. Do you feel emotionally drained or exhausted often?</p>
          <select onChange={(e) => handleAnswerChange('question3', e.target.value)} value={answers.question3}>
            <option value="">Select an answer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="question">
          <p>4. How often do you engage in activities to reduce stress (e.g., exercise, hobbies)?</p>
          <select onChange={(e) => handleAnswerChange('question4', e.target.value)} value={answers.question4}>
            <option value="">Select an answer</option>
            <option value="Very often">Very often</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Rarely">Rarely</option>
            <option value="Never">Never</option>
          </select>
        </div>

        <div className="question">
          <p>5. Do you talk to someone about your stress or mental health concerns?</p>
          <select onChange={(e) => handleAnswerChange('question5', e.target.value)} value={answers.question5}>
            <option value="">Select an answer</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button onClick={calculateResult}>Submit Assessment</button>
      </div>

      {result && <div className="result">
        <h3>Result:</h3>
        <p>{result}</p>
      </div>}
    </div>
  );
}
