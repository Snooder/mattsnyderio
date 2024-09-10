import React from "react";
import Card from "./Card"; // Assuming Card component is set up
import { events } from "../data"; // Importing events data

const EventGallery = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center md:text-left md:px-20 lg:px-40">
      <h2 className="text-center text-2xl font-bold text-white mb-10">Event Gallery</h2>
      {/* Grid layout with responsive design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <Card
            key={index}
            image={event.image}
            title={event.title}
            location={event.location}
            date={event.date}
            longDescription={event.longDescription} // Short description displayed on the back
          />
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
