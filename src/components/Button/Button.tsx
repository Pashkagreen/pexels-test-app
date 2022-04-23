import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button: React.FC = () => {
  return (
    <Link to="sign-up">
      <button className="btn">Присоединиться</button>
    </Link>
  );
};

export default Button;
