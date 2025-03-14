import React from 'react';
import { Search, ArrowRight,Music,Calendar,MapPin } from 'lucide-react';

const Hero = ({ isLoaded }) => {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20">
          {/* Left side - Text content */}
          <div className={`flex flex-col justify-center transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}>
            <div className="inline-block">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-2 inline-block">
                The Ultimate Experience Awaits
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">Get Your Tickets</span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                To Amazing Events
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg">
              Discover and book tickets to the most exclusive concerts, festivals, and cultural experiences all in one place.
            </p>
            
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                placeholder="Search for events, artists, venues..."
              />
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 flex items-center justify-center group">
                Explore Events
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="px-8 py-4 border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm rounded-lg text-white font-semibold transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50 flex items-center justify-center">
                How It Works
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-purple-900 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JD</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-purple-900 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">KS</span>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-purple-900 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AT</span>
                </div>
              </div>
              <div className="text-gray-300 text-sm">
                <span className="text-white font-semibold">10K+</span> happy customers
              </div>
            </div>
          </div>
          
          {/* Right side - Ticket animations */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Main ticket */}
            <div 
              className={`absolute w-64 md:w-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-1 shadow-xl transform transition-all duration-1000 ${
                isLoaded ? 'rotate-0 translate-y-0 opacity-100' : 'rotate-90 translate-y-24 opacity-0'
              }`}
            >
              <div className="bg-gray-900 rounded-xl p-6 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Summer Music Fest</h3>
                    <p className="text-gray-400 text-sm">Premium Experience</p>
                  </div>
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <Music className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">June 12, 2025</span>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Sunset Beach</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white font-bold text-lg">$180</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md text-white font-semibold transform transition-all duration-300 hover:scale-105">
                    Get Ticket
                  </button>
                </div>
              </div>
            </div>
            
            {/* Background floating tickets */}
            <div className="absolute w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-1 shadow-lg rotate-12 translate-y-12 opacity-75" />
            <div className="absolute w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-600 rounded-xl p-1 shadow-md -rotate-12 -translate-y-12 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;