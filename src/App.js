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
import Chatbot from './chatbot';
import { useState } from 'react';
import Diet from './diet';
import Community from './community';
import Book from './book';
import ArticlesAndBlogs from './articles-and-blogs';
import HealthChallenges from './health-challenges';
import Leaderboard from './leaderboard';

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(prevState => !prevState);
  };

  return (
    <>
      <section>
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
            <Route path="/community" element={<Community />} /> 
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
      

      {isChatbotOpen && (
        <div 
          id="chatbot" 
          style={{ 
            width: '300px',  
            transition: 'width 0.3s, height 0.3s', 
            position: 'fixed', 
            bottom: '10px', 
            right: '10px', 
            zIndex: '1000',
          }}
        >
          <Chatbot />
        </div>
      )}
    </>
  );
}

export default App;
