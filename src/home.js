import React, { useState } from 'react';
import Signin from './signin';
import './home.css';
import Userinput from './userinput';

export default function Home() {
  const [showUserInput, setShowUserInput] = useState(false);

  const handleAnalyzeClick = () => {
    setShowUserInput(true);
  };

  const handleClosePopup = () => {
    setShowUserInput(false);
  };

  return (
    <>
    <Signin />
      <section>
        <div id='userdetails'>
       <div id='up'>
          <h1>Enter your details for our analysis</h1>
          <button onClick={handleAnalyzeClick}>Analyze</button>
          </div>{showUserInput && (
            <div className="popup">
              <div className="popup-content">
                <Userinput />
                <button className="close-button" onClick={handleClosePopup}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>   
    </>
  );
}
