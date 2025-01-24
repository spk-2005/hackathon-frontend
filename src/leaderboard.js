import React, { useState } from 'react';
import './leaderboard.css';

function Leaderboard() {
  const defaultChallenges = 5; // Total number of challenges

  const [leaderboard, setLeaderboard] = useState([
    { serialNo: 1, name: 'John Doe', points: 80 },
    { serialNo: 2, name: 'Jane Smith', points: 70 },
    { serialNo: 3, name: 'Alice Johnson', points: 90 },
    { serialNo: 4, name: 'Bob Brown', points: 60 },
    { serialNo: 5, name: 'Charlie Davis', points: 50 },
    { serialNo: 6, name: 'David Evans', points: 40 },
    { serialNo: 7, name: 'Eva White', points: 30 },
    { serialNo: 8, name: 'Frank Harris', points: 20 },
    { serialNo: 9, name: 'Grace Walker', points: 10 },
    { serialNo: 10, name: 'Henry Lee', points: 0 },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    state: '',
    challengesCompleted: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let challengesCompleted = parseInt(formData.challengesCompleted, 10);

    // Validate challengesCompleted
    if (challengesCompleted > defaultChallenges) {
      challengesCompleted = defaultChallenges;
    }

    const percentage = Math.round((challengesCompleted / defaultChallenges) * 100);

    const newEntry = {
      serialNo: leaderboard.length + 1, // Temporary serial number
      name: `${formData.name} (${formData.state})`,
      points: percentage,
    };

    // Add the new entry, sort leaderboard, and update serial numbers
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.points - a.points)
      .map((entry, index) => ({
        ...entry,
        serialNo: index + 1, // Update serial numbers dynamically
      }));

    setLeaderboard(updatedLeaderboard);

    // Reset form
    setFormData({ name: '', state: '', challengesCompleted: '' });
  };

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>

      {/* Form for user to input their details */}
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit} className="leaderboard-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="state"
          placeholder="Your State"
          value={formData.state}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="challengesCompleted"
          placeholder="Challenges Completed"
          value={formData.challengesCompleted}
          onChange={handleInputChange}
          required
          min="0"
          max={defaultChallenges}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Show the leaderboard */}
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry) => (
            <tr key={entry.serialNo}>
              <td>{entry.serialNo}</td>
              <td>{entry.name}</td>
              <td>{entry.points}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
