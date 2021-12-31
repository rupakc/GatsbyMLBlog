import React from 'react';

export default function Paragraph(props) {
  return (
    <div style={{marginLeft:"4rem", marginRight:"4rem"}}>
      <p style={{fontSize:"2.5rem",textAlign:""}} dangerouslySetInnerHTML={{__html: props.text}}>
      </p>
    </div>
  );
}
