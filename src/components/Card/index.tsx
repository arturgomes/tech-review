import React from "react";
import ButtonGroup from "../ButtonGroup";
import "./styles.css";

interface CardProps {
  title: string;
  description: string;
  img:string;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div className="card__wrapper">
      <div className="card">
        <img
          src={img}
          alt="Sample Image"
          className="card__image"
        />
        <div className="card__container">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
          <div className="card__footer">
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
