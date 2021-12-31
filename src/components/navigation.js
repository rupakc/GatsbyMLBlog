import React from 'react';
import { Link } from "gatsby";

export default function NavigationBar() {
  return(
    <div style={{display:"inline-block",padding:"2rem", width:"100%", marginBottom:"0rem"}}>
      <Link to="/"> <h5 style={{float:"left"}}>  About  </h5> </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <Link to="/advanced"> <h5 style={{float:"right", marginRight:"2rem", paddingRight:"2rem"}}> Advanced </h5> </Link>
        <Link to="/basics"> <h5 style={{float:"right", marginRight:"2rem"}}>  Basics </h5> </Link>
        <Link to="/introduction"> <h5 style={{float:"right", marginRight:"2rem"}}> Introduction </h5> </Link>
      </ul>
    </div>
  );
}
