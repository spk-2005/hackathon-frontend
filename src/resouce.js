import React from 'react';
import './Resouce.css';  // Import the CSS file

export default function Resouce() {
  return (
    <div className="resource-container">
      <div className="video-section">
        <h2>Videos on Stress Management</h2>
        <div className="video-list">
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with actual video links
              title="Stress Management Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video Title 1</p>
          </div>
          <div className="video-item">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with actual video links
              title="Stress Management Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>Video Title 2</p>
          </div>
        </div>
      </div>

      <div className="book-section">
        <h2>Books and Guides on Stress Management</h2>
        <div className="book-list">
          <div className="book-item">
            <img src="book-image-url.jpg" alt="Book Title" /> {/* Replace with actual book images */}
            <p>Book Title 1</p>
          </div>
          <div className="book-item">
            <img src="book-image-url.jpg" alt="Book Title" /> {/* Replace with actual book images */}
            <p>Book Title 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
