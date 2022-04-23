import React, { InputHTMLAttributes } from "react";
import "./SearchForm.scss";

const SearchForm: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  type = "text",
  value,
  name,
  onChange,
}) => {
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
        placeholder="Ищите бесплатные фото и видео"
      />
    </div>
  );
};

export default SearchForm;
