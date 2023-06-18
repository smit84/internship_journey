import React from 'react';
import '../../styles/Timetr.css'
import { Link, Outlet } from 'react-router-dom';


const Timetr = () => {
  return (
    <div className="Firstchild">
      <h3>Timer is working..</h3>
      <div className='Pay-nav' id='Pay-nav'>
      <nav>
        <Link to="/hrms/timetracker/time" >Time</Link>
        <Link to="/hrms/timetracker/log">Log</Link>
        <Link to="/hrms/timetracker/hours">Hours</Link>
      </nav>

      </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Timetr;
