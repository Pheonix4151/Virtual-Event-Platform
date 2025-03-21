"use client"

import { useEffect, useState } from "react"
import { Search, ArrowRight, Music, Calendar, MapPin } from "lucide-react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 overflow-hidden pt-16 min-h-[90vh] flex items-center"
    >
      {/* Simple, Decent Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 opacity-90"></div>

        {/* Minimal Particles - Just a few subtle dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: index % 3 === 0 ? "3px" : "2px",
                height: index % 3 === 0 ? "3px" : "2px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.2 + (index % 5) * 0.05,
                animation: `gentle-pulse ${3 + (index % 3)}s ease-in-out infinite`,
                animationDelay: `${index * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Very Subtle Glow Effect */}
        <div
          className="absolute rounded-full bg-purple-600/10 blur-[100px]"
          style={{
            width: "40%",
            height: "40%",
            top: "30%",
            left: "60%",
            animation: "subtle-move 15s ease-in-out infinite alternate",
          }}
        ></div>
        <div
          className="absolute rounded-full bg-pink-600/10 blur-[100px]"
          style={{
            width: "30%",
            height: "30%",
            top: "60%",
            left: "30%",
            animation: "subtle-move-reverse 20s ease-in-out infinite alternate",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center">
            <div
              className={`inline-block transition-all duration-1000 ${
                isLoaded ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-lg font-semibold mb-2 inline-block">
                The Ultimate Experience Awaits
              </span>
            </div>

            <h1
  className={`text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight transition-all duration-1000 ${
    isLoaded ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
  }`}
  style={{ transitionDelay: "400ms" }}
>
  <span className="block transition-all duration-500 ease-in-out hover:translate-x-2 hover:scale-105 hover:text-gray-200 inline-block">
    Get Your Tickets
  </span>
  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-x transition-all duration-500 ease-in-out hover:translate-x-2 hover:scale-105 inline-block">
    To Amazing Events
  </span>
</h1>

            <p
              className={`text-gray-300 text-lg md:text-xl mb-8 max-w-lg transition-all duration-1000 ${
                isLoaded ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Discover and book tickets to the most exclusive concerts, festivals, and cultural experiences all in one
              place.
            </p>

            <div
              className={`relative mb-8 transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 shadow-lg shadow-purple-900/20"
                placeholder="Search for events, artists, venues..."
              />
            </div>

            <div
              className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Events
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <button className="px-8 py-4 border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm rounded-lg text-white font-semibold transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/50 flex items-center justify-center">
                How It Works
              </button>
            </div>

            <div
              className={`flex items-center space-x-4 transition-all duration-1000 ${
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1200ms" }}
            >
              <div className="flex -space-x-2">
                {["JD", "KS", "AT", "MR"].map((initials, index) => (
                  <div
                    key={initials}
                    className="w-10 h-10 rounded-full border-2 border-purple-900 bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 hover:z-10"
                    style={{ zIndex: 4 - index }}
                  >
                    <span className="text-white text-xs font-bold">{initials}</span>
                  </div>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
                <span className="text-white font-semibold">10K+</span> happy customers
              </div>
            </div>
          </div>

          {/* Right side - Ticket animations */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            {/* Event Tickets */}
            <div
              className={`absolute w-64 h-80 rounded-2xl shadow-2xl shadow-purple-900/30 backdrop-blur-sm overflow-hidden transition-all duration-1000 ${
                isLoaded
                  ? "translate-x-0 translate-y-0 opacity-100 rotate-6"
                  : "translate-x-24 translate-y-12 opacity-0 rotate-12"
              }`}
              style={{
                transitionDelay: "600ms",
                animation: "float 6s ease-in-out infinite",
                zIndex: 3,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-90"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Music className="w-6 h-6 text-white mr-2" />
                  <span className="text-white font-bold">MUSIC FESTIVAL</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Summer Vibes 2025</h3>
                <div className="flex items-center text-white/80 text-sm mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>June 15-18, 2025</span>
                </div>
                <div className="flex items-center text-white/80 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Central Park, New York</span>
                </div>
                <div className="mt-auto">
                  <div className="w-full h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-xs">TICKET TYPE</span>
                      <span className="text-white/80 text-xs">PRICE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-bold">VIP PASS</span>
                      <span className="text-white font-bold">$299</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute w-64 h-80 rounded-2xl shadow-2xl shadow-purple-900/30 backdrop-blur-sm overflow-hidden transition-all duration-1000 ${
                isLoaded
                  ? "translate-x-0 translate-y-0 opacity-90 -rotate-6"
                  : "translate-x-24 -translate-y-12 opacity-0 -rotate-12"
              }`}
              style={{
                transitionDelay: "800ms",
                animation: "float-reverse 7s ease-in-out infinite",
                zIndex: 2,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-500 opacity-90"></div>
              <div className="relative p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-white mr-2" />
                  <span className="text-white font-bold">CONFERENCE</span>
                </div>
                <h3 className="text-white text-xl font-bold mb-2">Tech Summit 2025</h3>
                <div className="flex items-center text-white/80 text-sm mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>May 10-12, 2025</span>
                </div>
                <div className="flex items-center text-white/80 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Convention Center, SF</span>
                </div>
                <div className="mt-auto">
                  <div className="w-full h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 text-xs">TICKET TYPE</span>
                      <span className="text-white/80 text-xs">PRICE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white font-bold">FULL ACCESS</span>
                      <span className="text-white font-bold">$499</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes gentle-pulse {
          0% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
        }

        @keyframes subtle-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-5%, -5%);
          }
        }

        @keyframes subtle-move-reverse {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(5%, 5%);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-15px) rotate(8deg);
          }
          100% {
            transform: translateY(0px) rotate(6deg);
          }
        }
        
        @keyframes float-reverse {
          0% {
            transform: translateY(0px) rotate(-6deg);
          }
          50% {
            transform: translateY(-20px) rotate(-4deg);
          }
          100% {
            transform: translateY(0px) rotate(-6deg);
          }
        }
        
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero