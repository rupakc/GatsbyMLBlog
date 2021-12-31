import React from 'react';
import NavigationBar from '../components/navigation.js';
import Paragraph from "../components/paragraph.js";
import FlipCard from '../components/flip.js';
import content from "../config/content.js";


export default function Advanced() {
  return (
    <div>
        <NavigationBar />
        <div className="row" style={{marginTop:"10rem"}}>
            <Paragraph text={content.advancedText}/>
          <hr/>
          {content.advancedCardJsonList.map((cardJson, index) =>
              <FlipCard heading={cardJson.heading} description={cardJson.description} />
            )
          }
        </div>
          <hr/>
    </div>
  );
}
