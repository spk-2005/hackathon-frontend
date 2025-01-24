import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './signin.css';
import logo from './swasthik.png';
import ima from './istockphoto-922112426-1024x1024.jpg';
import ima1 from './pexels-karolina-grabowska-4386466.jpg';
import Airtable from 'airtable'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import DailyCalendar from './dailycalender';
import Goal from './goal';

export default function Signin() {
    const navigate = useNavigate();
    const [showpr, setShowPr] = useState(false);
    const [userEmail, setUserEmail] = useState(''); 
    const [credits, setCredits] = useState(0);
    const [name, setUsername] = useState('');
    const [rating, setRating] = useState(''); 

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        const storedName = sessionStorage.getItem('usname');
        if (storedEmail) {
            setUserEmail(storedEmail); 
        } 
        if (storedName) {
            setUsername(storedName); 
        }
    }, []);

    const handleRegi = () => {
        navigate(`/sign`);
    }

    const handleProfileMenuToggle = () => {
        setShowPr(!showpr); 
    }

    const closeProfileMenu = () => {
        setShowPr(false); 
    }
    const handleLogout = () => {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('usname'); 
        setUserEmail('');
        setUsername(''); 
        setShowPr(false); 
    };
    

    function CustomLink({ href, children }) {
        const path = window.location.pathname;
        return (
            <li className={path === href ? "active" : ""}>
                <Link to={href}>{children}</Link>
            </li>
        );
    }

    const images = [ima, ima1,logo];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, [index]);

    const base = new Airtable({ apiKey: 'pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061' }).base('appfQNmAs6vTN5iAn'); 

    const handleSuggestionSubmit = (e) => {
        e.preventDefault();
        
        const suggestionField = e.target['suggestions']; 
        const suggestion = suggestionField ? suggestionField.value : ''; 
        const date = new Date().toLocaleDateString();
    
        
        if (!name || !userEmail) {
            alert("Please sign in to submit a suggestion.");
            return;
        }
        
        if (!suggestion) {
            alert("Please fill out all fields before submitting your suggestion.");
            return;
        }
        
        base('suggestions').create([{
            "fields": {
                "name": name,
                "user": userEmail,
                "suggestion": suggestion,
            }
        }], (err) => {
            if (err) {
                console.error('Error submitting suggestion:', err);
                return;
            }
            alert('Suggestion submitted successfully!');
            e.target.reset(); 
        });
    };
    
    const handleRatingSubmit = (e) => {
        e.preventDefault();
    
        if (!name || !userEmail || !rating) {
            alert("Please fill out all fields before submitting your rating.");
            return;
        }
    
        // Check if a rating already exists for this user
        base('rating').select({
            filterByFormula: `AND({name} = '${name}', {user} = '${userEmail}')`
        }).firstPage((err, records) => {
            if (err) {
                console.error('Error checking existing rating:', err);
                return;
            }
    
            if (records && records.length > 0) {
                
                alert("You have already submitted a rating. You cannot submit again.");
            } else {
                
                base('rating').create([{
                    "fields": {
                        "name": name,
                        "user": userEmail,
                        "rating": rating 
                    }
                }], (err) => {
                    if (err) {
                        console.error('Error submitting rating:', err);
                        return;
                    }
                    alert('Rating submitted successfully!');
                    setRating(''); 
                });
            }
        });
    };
    
    const apiKey = 'pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061';
    const apiurl = `https://api.airtable.com/v0/appfQNmAs6vTN5iAn/sign`;

  const [winners, setWinners] = useState([]);
  useEffect(() => {
    const fetchWinners = async () => {
      if (!userEmail) return; // Skip fetch if userEmail is not available
  
      try {
        const response = await fetch(apiurl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        const data = await response.json();
  
        if (data.records && data.records.length > 0) {
          setWinners(data.records); 
  
          
          const loggedInUser = data.records.find(
            (record) => record.fields.email === userEmail
            
          );
  
          setCredits(loggedInUser?.fields.credit || 0); 
          
        } else {
          setCredits(0); 
        }
      } catch (error) {
        console.error('Error fetching winners:', error);
        setCredits(0); 
      }
    };
  
    fetchWinners();
  }, [userEmail]);
  
    return (
        <>
<div id="sr">
    <a href="#suggestions">
        <span class="suggestions-text">Give Suggestions</span>
        <i class="fas fa-comment-dots suggestions-icon"></i>
    </a>
</div>
<div id="sra">
    <a href="#rating">
        <span class="ratings-text">Rate Us</span>
        <i class="fas fa-star rating-icon"></i>
    </a>
</div>



  
            <div id='userprofile'>
                {userEmail ? (
                    <>
                        <div id='udet'>
                            <div id='udet1'>
                        <ol id='udeatils' style={{listStyleType:'none'}}>
                            <li>Signed in as: {name}</li>
                            <li>Your Credits: {credits} <i className='fas fa-gem diamond-animation' id='gem'></i></li>


                        </ol>
                        <button id='profile' onClick={handleProfileMenuToggle}>&#128100;</button>
                        </div><div id='cal'>
                            <Goal/>
                            <DailyCalendar/>
                        </div></div>
                    </>
                ) : (
                    <ol id='cred' onClick={handleRegi}>
                        <li><button id='sig'>Sign In</button></li>
                        <li><button id='sig'>Sign Up</button></li>
                    </ol>
                )}

                {showpr && userEmail && (
                    <>
                    <div id="profile-menu">
                        <span id="close-profile" onClick={closeProfileMenu}>&#x00D7;</span>
                        <ol>
                            <CustomLink href='/profile'>Your Profile</CustomLink>
                            <CustomLink href='/dashboard'>Dashboard</CustomLink>
                            <CustomLink href='/settings'>Settings</CustomLink>
                            <h5 id='logout' onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</h5>
                        </ol>
                    </div>
                    </> )}
            </div>
            <section style={{ textAlign: 'center', padding: '20px' }}>
                <div>
                    <img 
                        src={images[index]} 
                        alt="Description of the image" 
                        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
                    />
                </div>
                {userEmail ? (
                    <h1>Hi! {name}</h1>
                ) : (
                    <div id='home-hero'>
                        <h2>
                            Register Now For Your Future!&nbsp;
                            <span id='sign' onClick={handleRegi}>Sign Up</span>
                        </h2>
                    </div>
                )}
            </section>
            <section id="inno" class="inno-section">
  <div class="container">
    <h2 class="section-title">Empowering Your Health Journey</h2>
    <p class="section-description">
      Our platform revolutionizes personal health and wellness by providing tailored workout routines, diet plans, and wellness recommendations based on your unique profile. Powered by advanced AI, we deliver personalized insights, real-time progress tracking, and motivational feedback to keep you engaged and achieve remarkable results.
    </p>
    <div class="features-grid">
      <div class="feature">
        <h3>Personalized Workout Routines</h3>
        <p>Crafted to match your fitness goals and lifestyle, ensuring optimal results with every session.</p>
      </div>
      <div class="feature">
        <h3>Custom Diet Plans</h3>
        <p>AI-powered meal plans tailored to your dietary preferences, fitness objectives, and health requirements.</p>
      </div>
      <div class="feature">
        <h3>Real-Time Progress Tracking</h3>
        <p>Monitor your improvements and stay motivated with data-driven feedback and goal tracking.</p>
      </div>
      <div class="feature">
        <h3>Wellness Recommendations</h3>
        <p>Receive expert tips and guidance to enhance your mental and physical well-being.</p>
      </div>
    </div>
  </div>
</section>

            <section id='suggestions' className="feedback-section">
                <div className="feedback-container">
                    <h2>We Value Your Suggestions</h2>
                    <p>Your feedback helps us improve and create a greener future. Please share your thoughts below:</p>
                    <form className="feedback-form" onSubmit={handleSuggestionSubmit}>
                        <label htmlFor="suggestion-textarea" className="feedback-label">Your Suggestions:</label>
                        <textarea id="suggestion-textarea" name="suggestions" required></textarea>
                        <button type="submit" className="feedback-submit" style={{backgroundColor:' rgb(0, 140, 255)'}}>Submit</button>
                    </form>
                </div>
            </section>
            <section id='rating' className="feedback-section">
                <div className="feedback-container">
                    <h2>Rate Us</h2>
                    <form className="feedback-form" onSubmit={handleRatingSubmit}>
                        <label htmlFor="rating-select" className="feedback-label">Your Rating:</label>
                        <select 
                            id="rating-select" 
                            value={rating} 
                            onChange={(e) => setRating(e.target.value)} 
                            required
                        >
                            <option value="" disabled>Select your rating</option>
                           <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="2">⭐⭐ Needs Improvement</option>
                <option value="1">⭐ Poor</option>
                        </select>
                        <button type="submit" className="feedback-submit">Submit Rating</button>
                    </form>
                </div>
            </section>
        </>
    );
}
