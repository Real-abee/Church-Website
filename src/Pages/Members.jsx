import React from "react";
import Hero from "../Components/Hero";
import "./Members.css";
import Fellowship from "../Utils/Fellowship";
import Box from "../Components/Box";
function Members() {
  return (
    <div>
    <Hero title="Fellowship Groups" />
       <div className="cards_vertical">
        {Fellowship.map((video) => (
           <Box image={video.image} title={video.title} />
         
        ))}
      </div>
    </div>
  );
}

export default Members;
