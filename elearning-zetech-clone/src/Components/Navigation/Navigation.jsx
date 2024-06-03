import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
        <div className="container nav__container">
            <a href="#" className="logo"><img src="https://elearning.zetech.ac.ke/pluginfile.php/1/theme_edutor/logo/1716463041/Portrait%20Logo%20282C%20%281%29.png" alt="" /></a>
            <ul className="nav_list">
              <li><a href="#">Course Catalogue</a></li>
              <li><a href="#">News and Announcement</a></li>
              <li><a href="#">Teaching & Exams Timetables</a></li>
              <li><a href="#">Results/Passlists</a></li>
              <li>
                <a href="#">Leaner Support</a>
                <FaChevronDown className='icon'/>
              </li>
              <li>
                <a href="#">More</a>
                <FaChevronDown className='icon'/>
              </li>
            </ul>
            <div className="nav_social">
              <a href="#">Login</a>
            </div>
            <div className="menu_btns">

            </div>
        </div>
    </nav>
  )
}

export default Navigation