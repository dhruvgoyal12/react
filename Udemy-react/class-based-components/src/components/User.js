import classes from "./User.module.css";
import React, { Component } from "react";

export default class User extends Component {
  componentWillUnmount() {
    console.log("User will unmount!");
  }
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return
// };

// export default User;
