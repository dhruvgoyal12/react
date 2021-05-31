import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
export default function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.name}>{props.children}</main>
    </Fragment>
  );
}
