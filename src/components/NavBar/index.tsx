import React from 'react';

import './styles.css';

const NavBar: React.FC = () => {
  return (<nav className="nav">
    <ul className="nav__list">
      <li className="nav__item nav__item--active"><a href="#" className="nav__link">Home</a></li>
      <li className="nav__item"><a href="#" className="nav__link">About</a></li>
      <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
    </ul>
  </nav>);
}

export default NavBar;