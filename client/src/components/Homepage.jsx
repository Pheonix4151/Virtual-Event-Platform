import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './Hero';
import LiveEvents from './LiveEvents'
import UpcomingEvents from './UpcomingEvents';
import Footer from './Footer';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const liveEvents = [
    { id: 1, title: 'Live Event 1', description: 'Description for live event 1' },
    { id: 2, title: 'Live Event 2', description: 'Description for live event 2' },
    { id: 3, title: 'Live Event 3', description: 'Description for live event 3' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Upcoming Event 1', description: 'Description for upcoming event 1' },
    { id: 2, title: 'Upcoming Event 2', description: 'Description for upcoming event 2' },
    { id: 3, title: 'Upcoming Event 3', description: 'Description for upcoming event 3' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection isLoaded={isLoaded} />
      <LiveEvents liveEvents={liveEvents} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
      <Footer />
    </div>
  );
};

export default HomePage;