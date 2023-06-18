import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Hnav.css';

const Hrms = () => {
  return (
    <div className="Page">
      <div className="Nav-container">
        <nav className="Nav ">
            <Link to="/hrms/timetracker">Time Tracker</Link>
            <Link to="/hrms/companypolicy">Company Policy</Link>
            <Link to="/hrms/leavemanagement">Leave Management</Link>
            <Link to="/hrms/payroll">Payroll</Link>
            <Link to="/hrms/holidaymanagement">Holiday Management</Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Hrms;
