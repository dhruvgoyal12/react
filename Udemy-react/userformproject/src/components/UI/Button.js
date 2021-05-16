import React from "react";
import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} ${classes.button}`}
    >
      {props.children}
    </button>
  );
}
