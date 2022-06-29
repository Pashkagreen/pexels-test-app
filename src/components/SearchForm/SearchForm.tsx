import React, { InputHTMLAttributes } from "react";
import "./SearchForm.scss";
import { translate } from "../../i18n";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const SearchForm: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = "text",
  value,
  name,
  onChange,
}) => {
  const language = useTypedSelector((state) => state.lang.language);

  return (
    <div className="search-form">
      <input
        className="search-input"
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        required
        autoComplete="off"
        placeholder={translate("placeholder", language)}
      />
    </div>
  );
};

export default SearchForm;
