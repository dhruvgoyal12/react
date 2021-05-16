import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
export default function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.text}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
}
