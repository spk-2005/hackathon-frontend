import React, { useEffect, useState } from 'react';
import './header.css';
import logo from './swasthik.png';

export default function Header() {
    function CustomLink({ href, children, onClick }) {
        const path = window.location.pathname;
        return (
            <li className={path === href ? "active" : ""} onClick={onClick}>
                <a href={href}>{children}</a>
            </li>
        );
    }
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(intervalId); 
    }, []);
    return (
        <>
            <section id='header-section'>
                <div id='header-cont'>
                    <div id='mainicon'>
                   
                            <a href='/'><img src={logo} alt='SPK-HUB'  id='logo'/></a>
                            <div><span><a  href="https://www.instagram.com/prasanna_kumar_simmhadri_2005/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit our Instagram profile"><ion-icon name="logo-instagram"></ion-icon></a></span>
                            <span><a   href="https://www.facebook.com/profile.php?id=100083873681403" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit our Facebook page"><ion-icon name="logo-facebook"></ion-icon></a></span>
                            <span><a 
              href="https://x.com/Prasannak5002" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Visit our Twitter profile"><ion-icon name="logo-twitter"></ion-icon></a></span>
                            <span><a  target="_blank" 
              rel="noopener noreferrer" 
             href='https://wa.me/8309179509
'><ion-icon name="logo-whatsapp"></ion-icon></a></span>
                       
                        </div> </div>
                    <ol>
                        
                        <CustomLink href='/'>Home</CustomLink>
                        <CustomLink href='/about'>About</CustomLink>
                        <CustomLink href='/workout'>WorkOut</CustomLink>
                        <CustomLink href='/diet'>Diet</CustomLink>
                        <CustomLink href='/mentalhealth'>Mental Health</CustomLink>
                        <CustomLink href='/community'>Community</CustomLink>                
                        <CustomLink href='/contact'>Contact</CustomLink>
                    </ol>
                </div>
            </section>
        </>
    );
}
