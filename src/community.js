import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './community.css';

function Community() {
  const [selectedItem, setSelectedItem] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedItem(value);

    // Navigate based on the selected option
    if (value === 'ask-experts') {
      navigate('/book');
    } else if (value === 'articles-blogs') {
      navigate('/articles-and-blogs');
    } else if (value === 'health-challenges') {
      navigate('/health-challenges');
    } else if (value === 'leaderboard') {
      navigate('/leaderboard');
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Personalized Health Assistant</h1>
        <p>Designing a community page for your health journey.</p>
      </div>

      <div className="dropdown-container">
        <label htmlFor="community-dropdown">Select a section:</label>
        <select
          id="community-dropdown"
          value={selectedItem}
          onChange={handleSelectChange}
          className="dropdown"
        >
          <option value="">--Choose an option--</option>
          <option value="ask-experts">Ask the Experts</option>
          <option value="articles-blogs">Articles and Blogs</option>
          <option value="health-challenges">Health Challenges</option>
          <option value="leaderboard">Leaderboard</option>
        </select>
      </div>
    </div>
  );
}

export default Community;