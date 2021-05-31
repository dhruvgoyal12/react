import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/add" activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
