import './App.css';
import Header from './header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home';
import hetro from './hetero health - Copy.png'
import Sign from './sign';
import Profile from './profile';
import top from './top.png';
import Userinput from './userinput';
import DailyCalendar from './dailycalender';
import Task from './task';
import About from './about';
import { useState } from 'react';
import Diet from './diet';
import Community from './community';
import Book from './book';
import ArticlesAndBlogs from './articles-and-blogs';
import HealthChallenges from './health-challenges';
import Leaderboard from './leaderboard';
import ContactPage from './contact';
import Contact from './contact';
import Dashboard from './dashboard';
import Mentalhealth from './mentalhealth';
import Couns from './couns';
import Resouce from './resouce';
import Selfasses from './selfasses';

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };


  return (
    <>
      <section id='main'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dailycalender" element={<DailyCalendar />} />
            <Route path="/userinput" element={<Userinput />} />
            <Route path="/task/:date" element={<Task />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/diet" element={<Diet />} /> 
            <Route path="/mentalhealth" element={<Mentalhealth/>} /> 
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/community" element={<Community />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/couns" element={<Couns/>} /> 
            <Route path="/resouce" element={<Resouce/>} />
            <Route path="/selfasses" element={<Selfasses/>} /> 
            <Route path="/book" element={<Book />} />
        <Route path="/articles-and-blogs" element={<ArticlesAndBlogs />} />
        <Route path="/health-challenges" element={<HealthChallenges />} />
        <Route path="/leaderboard" element={<Leaderboard />} />

          </Routes>
        </BrowserRouter>
      </section>
      <div id="top" onClick={scrollToTop} title="Back to Top">
        <img 
          src={top} 
          alt="Back to Top" 
        />
      </div>
      

    </>
  );
}

export default App;
