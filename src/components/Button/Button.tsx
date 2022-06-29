import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Button: React.FC = () => {
  const language = useTypedSelector((state) => state.lang.language);

  return (
    <Link to="sign-up">
      <button className="btn">{translate("join", language)}</button>
    </Link>
  );
};

export default Button;
