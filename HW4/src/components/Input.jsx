import React from "react";

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  renderTextArea,
  changeInputField,
  changePasswordInput,
  changeTextInput
}) => {
  return (
    <p>
      {renderTextArea ? (
        <textarea
         
          value={value}
          onChange={onChange}
          rows={6}
          cols={20}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}

      {name === "password" && (
        <button type="button" onMouseDown={changeTextInput} onMouseUp={changePasswordInput} className="eye-button">
          <i
            className={type === "password" ? "fa fa-eye-slash" : "fa fa-eye"}
          />
        </button>
      )}

      {name === "komentar" && (
        <button type="button" onClick={changeInputField} className="eye-button">
          <i className="fa fa-comments-o" />
        </button>
      )}
    </p>
  );
};
