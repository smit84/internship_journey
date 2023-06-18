import React from 'react';
import '../styles/Pm.css'
import { Link, Outlet } from 'react-router-dom';

const Pm = () => {
  return (
    <div className="Page">
      <div className='Nav-container'>
        <div className="Nav">
          <nav>
            <Link to="/pm/passwordmanagement">Password Management</Link>
          </nav>
        </div>
       </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Pm;