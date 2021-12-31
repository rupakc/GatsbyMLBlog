import React from 'react'
import cardStyles from "./flip.module.css";

export default function FlipCard(props) {
  return (
    <div className={cardStyles.card}>
        <h5 style={{textAlign: "center", fontSize:"2.5rem"}}><b>{props.heading}</b></h5>
        <div className={cardStyles.cardcontainer}>
          <p style={{textAlign: "center", fontSize:"2rem"}}
          dangerouslySetInnerHTML={{__html: props.description}}>
          </p>
        </div>
    </div>

  );
}
