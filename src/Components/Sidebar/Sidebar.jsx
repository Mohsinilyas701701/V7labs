import React from 'react';
import link  from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="list-unstyled components">
        <li className="active">
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
        <li>
          <link to="/products">Products</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
