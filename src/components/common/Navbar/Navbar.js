import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Navbar.css';

const publicURL = process.env.PUBLIC_URL;

function Navbar() {
  let location = useLocation();
  const [menu, setMenu] = useState([...MenuData]);

  function updateActiveMenu(path) {
    return menu.map((item, i) => {
      if(`${publicURL}${item.path}` === `${path}`){ item.active = true; } else { item.active = false; }
      return item;})
  }

  useEffect(() => {
    setMenu(updateActiveMenu(location.pathname))
  },[location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <nav className={"nav-menu"}>
      <ul className="nav-menu-items">
        {menu.map((item, i) => (
          <li key={i} className={item.cName}>
            <Link className={item.active ? "active" : null} to={`${publicURL}${item.path}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
