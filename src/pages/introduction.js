import React from 'react';
import NavigationBar from '../components/navigation.js';
import List from "../components/list.js";
import Paragraph from "../components/paragraph.js";
import content from "../config/content.js";

export default function Introduction() {
  return (
    <div>
        <NavigationBar />
        <div className="row" style={{marginTop:"10rem"}}>
          <Paragraph text={content.introductionText} />
          <List listElements={content.typesOfML} />
        </div>
    </div>
  );
}
