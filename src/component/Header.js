import React from 'react';
import { Link } from 'react-router-dom';
import nasaqlogo from '../media/nasaqlogo.svg';
import './headerstyle.css';
import back from '../media/back.svg';
import mic from '../media/mic.svg';
import setting from '../media/setting.svg';

const Header = () => (
  <div className="header">
    <nav>
      <ul width="100%">
        <li>
          <Link to="/">
            <img src={back} alt="Go Back" />
          </Link>
        </li>
        <li className="mic-settings" width="30%">
          <img src={mic} alt="mic" />
          <img src={setting} alt="settings" />
        </li>
      </ul>
    </nav>
    <img src={nasaqlogo} alt="nasdaq" className="nasdaq-logo" />
  </div>
);

export default Header;
