import React from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';

const EventCard = ({ event, live }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-purple-100">
      {/* Image container with overlay gradient */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110" 
        />
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-70"></div>
        
        {/* Live badge with pulse animation */}
        {live && (
          <div className="absolute top-4 right-4">
            <span className="bg-purple-600 text-white px-3 py-1 text-xs font-bold rounded-full flex items-center">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              LIVE
            </span>
          </div>
        )}
        
        {/* Title positioned at bottom of image */}
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white transition-all duration-300">{event.title}</h3>
      </div>

      {/* Card body */}
      <div className="p-6 bg-gradient-to-b from-purple-50 to-white">
        {/* Location with icon */}
        <div className="flex items-center mb-3 text-purple-800">
          <MapPin className="h-4 w-4 mr-2 text-purple-500" />
          <p className="text-purple-700">{event.location}</p>
        </div>
        
        {/* Date and popularity/rating */}
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center text-purple-700">
            <Calendar className="h-4 w-4 mr-2 text-purple-500" />
            {event.date}
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
            <span className="text-gray-600">4.8</span>
          </div>
        </div>
        
        {/* Price and button area */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-purple-900 font-bold text-xl">${event.price}</span>
          <button className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:translate-y-1 shadow-md hover:shadow-purple-300">
            Get Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;