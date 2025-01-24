import React from 'react';
import './health-challenges.css';

function HealthChallenges() {
  const challenges = [
    {
      title: '10,000 Steps a Day',
      description: 'Motivate yourself to walk at least 10,000 steps daily to improve cardiovascular health and boost energy levels.',
      image: 'https://via.placeholder.com/300x200?text=10%2C000+Steps+a+Day',
    },
    {
      title: '30-Day Fitness Challenge',
      description: 'A structured plan with daily workouts to tone your body and improve fitness in just 30 days.',
      image: 'https://via.placeholder.com/300x200?text=30-Day+Fitness+Challenge',
    },
    {
      title: 'Hydration Challenge',
      description: 'Drink 8 glasses of water daily for better skin, energy, and overall health.',
      image: 'https://via.placeholder.com/300x200?text=Hydration+Challenge',
    },
    {
      title: 'Mindfulness Challenge',
      description: 'Practice 10 minutes of mindfulness or meditation daily to reduce stress and improve mental clarity.',
      image: 'https://via.placeholder.com/300x200?text=Mindfulness+Challenge',
    },
  ];

  return (
    <div className="health-challenges">
      <h1>Community Health Challenges</h1>
      <p>Join these exciting challenges to stay active and improve your overall health!</p>
      <div className="challenges-container">
        {challenges.map((challenge, index) => (
          <div className="challenge-card" key={index}>
            <img src={challenge.image} alt={challenge.title} className="challenge-image" />
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthChallenges;