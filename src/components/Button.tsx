import React from 'react';

interface ButtonProps {
  clickHandler(): void;
}

const Button: React.FC<ButtonProps> = ({ clickHandler }) => {
  return <button onClick={clickHandler}> > </button>;
};

export default Button;
