import React from "react";
import Button from "../Button";

import "./styles.css";

const Card: React.FC = () => {
  return (
    <div className="card__wrapper">
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sample Image"
        className="card__image"
      />
      <div className="card__container">
        <h2 className="card__title">Card Title</h2>
        <p className="card__description">
          This is a description for the card content.
        </p>
        <div className="card__footer">
          <Button />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
