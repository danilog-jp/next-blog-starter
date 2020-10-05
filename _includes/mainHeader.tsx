import * as React from "react";

const MainHeader: React.FC<any> = ({ config }) => {
  return (
    <header>
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
    </header>
  );
};

export default MainHeader;
