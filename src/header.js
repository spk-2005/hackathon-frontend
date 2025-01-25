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
                            <ol>
                        
                        <CustomLink href='/'>Home</CustomLink>
                        <CustomLink href='/about'>About</CustomLink>
                        <CustomLink href='/diet'>Diet</CustomLink>
                        <CustomLink href='/mentalhealth'>Mental Health</CustomLink>
                        <CustomLink href='/community'>Community</CustomLink>                
                        <CustomLink href='/contact'>Contact</CustomLink>
                    </ol> </div>
                   
                </div>
            </section>
        </>
    );
}
