import React from 'react';

export default function List(props) {

  return(
    <div>
      <ul style={{marginLeft:"4rem", marginRight:"4rem", fontSize:"2.5rem"}}>
      {props.listElements.map((data,index) =>
          <li key={index} style={{textAlign:"left"}} dangerouslySetInnerHTML={{__html: data}}>
          </li>
        )}
      </ul>
    </div>
  );
}
