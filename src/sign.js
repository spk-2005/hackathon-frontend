import React, { useEffect, useState } from 'react';
import { auth, provide, facebookProvider } from './firebase'; 
import { signInWithPopup } from 'firebase/auth';
import Airtable from 'airtable'; 
import './sign.css';

const base = new Airtable({apiKey:'pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061'}).base('appfQNmAs6vTN5iAn');

export default function Sign() {
    const [value, setValue] = useState('');
    const [name, setName] = useState(''); 
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [message, setMessage] = useState(''); 

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provide)
            .then((data) => {
                const userEmail = data.user.email;
                setValue(userEmail);
                if (isSigningUp) {
                    checkIfEmailExists(userEmail, name);
                } else {
                    checkUserInAirtable(userEmail);
                }
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    const handleFacebookSignIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, facebookProvider)
            .then((data) => {
                const userEmail = data.user.email;
                setValue(userEmail);
                if (isSigningUp) {
                    checkIfEmailExists(userEmail, name);
                } else {
                    checkUserInAirtable(userEmail);
                }
            })
            .catch((error) => {
                console.error('Error signing in with Facebook:', error);
            });
    };

    const toggleSignUp = () => {
        setIsSigningUp((prev) => !prev);
        setMessage(''); 
    };

    const checkIfEmailExists = (email, name) => {
        base('sign')
            .select({
                filterByFormula: `{email} = '${email}'`, 
            })
            .firstPage((err, records) => {
                if (err) {
                    console.error('Error checking email in Airtable:', err);
                    setMessage('Error checking your account. Please try again.');
                    return;
                }
                if (records.length > 0) {
                    setMessage('Email already registered. Please sign in.');
                } else {
                    saveUserToAirtable(email, name);
                }
            });
    };

    const saveUserToAirtable = (email, name) => {
        if (!name.trim()) {
            setMessage('Please enter your name.');
            return;
        }
        base('sign').create(
            [
                {
                    fields: {
                        email: email,
                        name: name,
                    },
                },
            ],
            (err, records) => {
                if (err) {
                    console.error('Error saving to Airtable:', err);
                    setMessage('Error saving your data. Please try again.');
                    return;
                }
                setMessage('You have successfully signed up!');
                sessionStorage.setItem('email', email); 
                sessionStorage.setItem('usname', name);  
                window.location.href = '/';
            }
        );
    };

    const checkUserInAirtable = (email) => {
        base('sign')
            .select({
                filterByFormula: `{email} = '${email}'`, 
            })
            .firstPage((err, records) => {
                if (err) {
                    console.error('Error fetching from Airtable:', err);
                    setMessage('Error checking your account. Please try again.');
                    return;
                }
                if (records.length > 0) {
                    const record = records[0];
                    const userName = record.fields.name; 
                    console.log('User found, signing in...');
                    
                    sessionStorage.setItem('email', email);
                    sessionStorage.setItem('usname', userName); 
                    alert(`Welcome back, ${userName}!`);
    
                    window.location.href = '/'; // Redirect after successful sign-in
                } else {
                    setMessage('Email not registered. Please sign up first.');
                }
            });
    };

    useEffect(() => {
        const storedEmail = sessionStorage.getItem('email');
        if (storedEmail) {
            setValue(storedEmail);
        }
    }, []);

    return (
        <div className="register-container">
            <form className="register-form">
                <h2>{isSigningUp ? 'Sign Up' : 'Sign In'}</h2>
                {isSigningUp && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                )}
               
                
                <button className="google-btn" onClick={handleGoogleSignIn}>
                    {isSigningUp ? 'Sign Up With Google' : 'Sign In With Google'}
                </button>
            </form>

            <div className="social-login">
                <h4>Or sign in with:</h4>
                <div className="social-icons">
                    <a href="#" className="social-icon google" onClick={handleGoogleSignIn}>
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                    <a href="#" className="social-icon facebook" onClick={handleFacebookSignIn}>
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
            </div>

            <p>
                {isSigningUp ? 'Already have an account?' : 'Don’t have an account?'}
                <button className="toggle-btn" onClick={toggleSignUp}>
                    {isSigningUp ? 'Sign In' : 'Sign Up'}
                </button>
            </p>

            {message && <p className="message">{message}</p>}
        </div>
    );
}
