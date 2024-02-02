import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav className={`col-md-2 ${sidebarVisible ? '' : 'd-none d-md-block'} bg-dark sidebar`}>
      <button
        className="navbar-toggler d-md-none"
        type="button"
        onClick={toggleSidebar}
        aria-controls="sidebar"
        aria-expanded={sidebarVisible}
        aria-label="Toggle sidebar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`sidebar-sticky${sidebarVisible ? ' visible' : ''}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Dashboard
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
