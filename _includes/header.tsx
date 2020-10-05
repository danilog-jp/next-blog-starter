import * as React from "react";

const Header: React.FC<any> = ({ config }) => {
  return (
    <header id="header">
      <div className="inner">
        <a href="" className="logo">
          <span className="symbol">
            <img src={config.logo} alt="" />
          </span>
          <span className="title">{config.title}</span>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
