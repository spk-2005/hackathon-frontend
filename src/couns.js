import React, { useState, useRef } from 'react';
import './couns.css'; // Assuming you create a separate CSS file for the styles

export default function Couns() {
  const [activeSection, setActiveSection] = useState('inpersonal'); // default to 'inpersonal'
  const [isVideoCallStarted, setIsVideoCallStarted] = useState(false);

  // Refs for video elements
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const startVideoCall = async () => {
    try {
      // Get user media (camera and microphone)
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      // Assign the local stream to the local video element
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      // Create a peer connection (for WebRTC)
      const peerConnection = new RTCPeerConnection();

      // Add the local stream to the peer connection
      stream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, stream);
      });

      // Listen for remote tracks
      peerConnection.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      // Set up ICE Candidate handling
      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          // You would need to send the ICE candidates to the remote peer via your signaling server
          console.log('ICE Candidate:', event.candidate);
        }
      };

      // Create an offer to initiate the connection
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      // Send the offer to the remote peer via your signaling server (not implemented here)
      console.log('Offer:', offer);

      setIsVideoCallStarted(true);
    } catch (err) {
      console.error('Error starting video call:', err);
    }
  };

  return (
    <div className="counselling-container">
      <ol className="sections-list">
        <li
          onClick={() => handleSectionClick('inpersonal')}
          className={activeSection === 'inpersonal' ? 'active' : ''}
        >
          In-Personal Counselling
        </li>
        <li
          onClick={() => handleSectionClick('online')}
          className={activeSection === 'online' ? 'active' : ''}
        >
          Online Counselling
        </li>
      </ol>

      {activeSection === 'inpersonal' && (
        <div id="inpersonal-section" className="section">
          <form>
            <input type="text" placeholder="Enter Name" />
            <input type="tel" placeholder="Enter Mobile Number" />
            <label>
              <input type="checkbox" />
              <input type="checkbox" />
            </label>
          </form>
        </div>
      )}

      {activeSection === 'online' && (
        <div id="online-section" className="section">
          {!isVideoCallStarted ? (
            <button onClick={startVideoCall}>Start Video Call</button>
          ) : (
            <div className="video-call-container">
              <div className="video-container">
                <h3>Your Video</h3>
                <video
                  ref={localVideoRef}
                  autoPlay
                  muted
                  style={{ width: '100%', height: 'auto' }}
                ></video>
              </div>
              <div className="video-container">
                <h3>Remote User</h3>
                <video
                  ref={remoteVideoRef}
                  autoPlay
                  style={{ width: '100%', height: 'auto' }}
                ></video>
              </div>
            </div>
          )}
          <p>Online counselling section is under construction.</p>
        </div>
      )}
    </div>
  );
}
