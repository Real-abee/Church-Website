import React from "react";
import "./Events.css";
import EventData from "../Utils/EventData";
import Box from "../Components/Box";
import Hero from "../Components/Hero";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Events() {
  return (
    <div className="header">
      <Hero title="Upcoming Events" />
     
      <div className="event_cards">
      <Carousel className="crsl" infiniteLoop interval={3000} autoPlay centerMode showArrows={false} centerSlidePercentage={40}>
      {EventData.map((event) => (
          <Box
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}</Carousel>
      </div>
      
    </div>
  );
}

export default Events;
