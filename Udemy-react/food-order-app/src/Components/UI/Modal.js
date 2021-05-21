import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseClick}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
export default function Modal(props) {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onCloseClick={props.onCloseClick} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
