import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
     
      <div>
        <ul className="nav flex-column" style={{ backgroundColor: 'rgba(169, 169, 169, 0.5)', textAlign: 'center' }}>
          <li className="nav-item">
            <Link to="/" className="nav-link text-light"> Dashboard </Link>
          </li>
        </ul>
      </div>
  
  );
};

export default Sidebar;
