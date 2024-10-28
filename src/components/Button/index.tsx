import React from "react";

import './styles.css';

const Button: React.FC = () => {
  return (
    <>
      <button className="button button--primary">Primary Button</button>
      <button className="button button--secondary">Secondary Button</button>
    </>
  );
};

export default Button;
