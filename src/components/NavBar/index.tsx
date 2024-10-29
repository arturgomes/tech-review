import React, { useState } from 'react';
import './styles.css';
import Timer from '../Timer';
import Button from '../ButtonGroup/Button';

const NavBar: React.FC = () => {
  const [showTimer, setShowTimer] = useState<boolean>(true); // State to toggle Timer

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__item--active"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
      </ul>
      <div className="nav__controls">
        

        {/* Conditionally render Timer based on `showTimer` */}
        {showTimer && (
          <div className="nav__timer">
            <Timer />
          </div>
        )}

        {/* Toggle button to mount/unmount the Timer */}
        <Button
          className="nav__button"
          onClick={() => setShowTimer((prev) => !prev)}
          style={{ marginLeft: "10px" }}
        >
          {showTimer ? "Hide Timer" : "Show Timer"}
        </Button>
      </div>
    </nav>
  );
}

export default NavBar;
