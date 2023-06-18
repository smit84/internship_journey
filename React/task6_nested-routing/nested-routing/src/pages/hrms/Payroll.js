import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/Payroll.css'

const Payroll = () => {
  return (
    <div className="Firstchild">
      <h3>Payroll is working..</h3>
      <div className='Pay-nav'>
        <nav >
          <Link to="/hrms/payroll/salary">Salary</Link>
          <Link to="/hrms/payroll/slip">Slip</Link>
        </nav>
      </div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Payroll;
