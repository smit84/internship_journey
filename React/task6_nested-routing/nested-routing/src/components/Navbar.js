import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Img from '../icon/caret-down-solid.svg'


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="hrms">Hrms <img src={Img}/> </Link>
        <Link to="pm">Password Management <img src={Img}/></Link>
        <Link to="toggl">Toggl <img src={Img}/></Link>
      </nav>
    </div>
  );
};
export default Navbar;
