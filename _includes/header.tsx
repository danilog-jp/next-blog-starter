import * as React from "react";
import Link from "next/link";

const Header: React.FC<any> = ({ config }) => {
  return (
    <header id="header">
      <div className="inner">
        <Link href="/">
          <a className="logo">
            <span className="symbol">
              <img src={config.logo} alt="" />
            </span>
            <span className="title">{config.title}</span>
          </a>
        </Link>
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
