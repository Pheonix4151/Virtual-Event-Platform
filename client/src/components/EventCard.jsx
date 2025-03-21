import React, { useState } from "react";
import { Calendar, MapPin, Star, Clock, Users } from "lucide-react";

const EventCard = ({ event, live = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default event data if not provided
  const defaultEvent = {
    title: "Music Festival 2023",
    image: "/placeholder.svg?height=400&width=600",
    location: "Central Park, New York",
    date: "Oct 15, 2023",
    price: 49.99,
    attendees: 1240,
    duration: "3h",
    rating: 4.5,
    ...event,
  };

  const e = defaultEvent;

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 
                transform hover:-translate-y-2 hover:shadow-2xl border border-purple-100 
                group relative max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        /* Ensure the component has proper spacing and position */
        margin: "1rem",
        position: "relative",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute -right-12 -top-12 w-24 h-24 bg-purple-200 rounded-full opacity-30 
                    group-hover:scale-150 transition-all duration-700"
      ></div>
      <div
        className="absolute -left-12 -bottom-12 w-24 h-24 bg-purple-300 rounded-full opacity-20 
                    group-hover:scale-150 transition-all duration-700"
      ></div>

      {/* Image container with overlay gradient */}
      <div className="relative overflow-hidden h-60">
        <img
          src={e.image || "/placeholder.svg"}
          alt={e.title}
          className="w-full h-full object-cover transition-all duration-700 
                    group-hover:scale-110 filter group-hover:brightness-110"
        />

        {/* Gradient overlay with animated opacity */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-800/40 to-transparent 
                      opacity-70 group-hover:opacity-80 transition-opacity duration-500"
        ></div>

        {/* Live badge with pulse animation */}
        {live && (
          <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
            <span
              className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-4 py-1.5 
                          text-xs font-bold rounded-full flex items-center shadow-lg"
            >
              <span 
                className="inline-block w-2 h-2 bg-white rounded-full mr-2"
                style={{
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              ></span>
              LIVE NOW
            </span>
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-4 left-4 transform group-hover:-translate-y-1 transition-all duration-300">
          <span
            className="bg-white/90 text-purple-800 px-3 py-1 text-xs font-medium rounded-full 
                        shadow-sm backdrop-blur-sm"
          >
            Music Event
          </span>
        </div>

        {/* Title positioned at bottom of image with animated underline */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3
            className="text-2xl font-bold text-white transition-all duration-300 
                        group-hover:translate-x-1"
          >
            {e.title}
            <span 
              className="block h-0.5 bg-white mt-1"
              style={{
                width: isHovered ? "50%" : "0%",
                transition: "width 0.5s ease",
              }}
            ></span>
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6" style={{
        background: "linear-gradient(to bottom, #ffffff, #f3e8ff)",
      }}>
        {/* Info section - Changed to include rating next to date */}
        <div className="flex flex-col gap-3 mb-4">
          {/* Location with icon */}
          <div 
            className="flex items-center text-purple-800 transition-transform duration-300"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <MapPin className="h-4 w-4 mr-2 text-purple-500" />
            <p className="text-purple-700 truncate">{e.location}</p>
          </div>

          {/* Date with rating on the right side */}
          <div 
            className="flex items-center justify-between transition-transform duration-300"
            style={{
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <div className="flex items-center text-purple-800">
              <Calendar className="h-4 w-4 mr-2 text-purple-500" />
              <p className="text-purple-700">{e.date}</p>
            </div>
            
            {/* Rating moved here, next to date */}
            <div 
              className="flex items-center bg-purple-100 px-3 py-1 rounded-lg transition-all duration-300"
              style={{
                transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                boxShadow: isHovered ? "0 4px 6px -1px rgba(147, 51, 234, 0.1)" : "none",
              }}
            >
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="text-purple-800 font-medium text-sm">{e.rating}</span>
            </div>
          </div>
        </div>

        {/* Price and button area */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Price per person</span>
            <span
              className="text-purple-900 font-bold text-2xl transition-all duration-300"
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                transformOrigin: "left",
              }}
            >
              ${e.price}
            </span>
          </div>

          <div className="flex justify-end">
            <button
              className="px-5 py-2.5 text-white font-semibold rounded-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(to right, #9333ea, #7e22ce)",
                transition: "all 0.3s ease",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHovered ? "0 10px 15px -3px rgba(147, 51, 234, 0.3)" : "none",
              }}
            >
              <span className="relative z-10">Get Ticket</span>
              <span
                className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300"
                style={{
                  opacity: isHovered ? "0.2" : "0",
                }}
              ></span>
              <span
                className="absolute -inset-full top-0 block h-full w-1/2 transform -skew-x-12 
                          bg-gradient-to-r from-transparent to-white opacity-40"
                style={{
                  animation: isHovered ? "shine 1.5s" : "none",
                }}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Add keyframes for animations using style tag */}
      <style jsx>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default EventCard;