import React from 'react';
import EventCard from './EventCard';

const LiveEvents = ({ liveEvents }) => {
  return (
    <section id="live-events" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Live Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveEvents.map(event => (
            <EventCard key={event.id} event={event} live />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveEvents;