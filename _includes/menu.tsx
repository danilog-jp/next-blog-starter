import * as React from "react";

const Menu: React.FC<any> = ({ items }) => {
  return (
    <nav id="menu">
      <h2>Menu</h2>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Menu;
