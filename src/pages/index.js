import React from "react";
import NavigationBar from "../components/navigation.js";
import Paragraph from "../components/paragraph.js";
import content from "../config/content.js";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <div className="row" style={{marginTop:"10rem"}}>
        <Paragraph text={content.aboutText} />
      </div>
    </div>
  );
}
