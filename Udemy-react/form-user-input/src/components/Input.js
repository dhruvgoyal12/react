import React from "react";

export default function Input(props) {
  return (
    <div className={props.inputClasses}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        onBlur={props.onBlur}
      />
      {props.inputInvalidator && (
        <p className="error-text">{props.errorText}</p>
      )}
    </div>
  );
}
