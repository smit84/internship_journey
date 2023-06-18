import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Toggl.css';

const Toggl = () => {
  return (
    <div className="Page">
      <div className='Nav-container'>
      <nav className='Nav' >
          <Link to="/toggl/report"> Report</Link>
          <Link to="/toggl/dashboard"> Dashboard</Link>
        </nav>
    

      </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Toggl;
