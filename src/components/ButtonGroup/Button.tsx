// Button.tsx
import React from 'react';
import './styles.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string; // Allows passing a custom class name
  style?: React.CSSProperties; // Allows passing inline styles
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children, className, style }) => {
  return (
    <button
      className={`button ${variant === 'primary' ? 'button--primary' : 'button--secondary'} ${className || ''}`}
      onClick={onClick}
      style={style} // Apply inline styles
    >
      {children}
    </button>
  );
};

export default Button;
