import React from "react";
import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      type={props.type}
      className={`${props.className} ${classes.button}`}
    >
      Add user
    </button>
  );
}
