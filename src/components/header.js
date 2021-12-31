import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <h1>{props.headerText}</h1>
    </React.Fragment>
  );
}

export default Header;
