import React from 'react';
import NavigationBar from '../components/navigation.js';
import Paragraph from "../components/paragraph.js";
import FlipCard from '../components/flip.js';
import content from "../config/content.js";

export default function Basics() {
  return (
    <div>
        <NavigationBar />
        <div className="row" style={{marginTop:"10rem"}}>
          <Paragraph text={content.basicText}/>
          <hr/>
          {content.basicCardJsonList.map((cardJson, index) =>
              <FlipCard heading={cardJson.heading} description={cardJson.description} />
            )
          }
          <hr/>
        </div>
    </div>
  );
}
