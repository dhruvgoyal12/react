import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUserInput, setEnteredUserInput] = useState({
    enteredUsername: "",
    enteredAge: "",
  });

  const addUserHandle = (event) => {
    event.preventDefault();

    if (
      enteredUserInput["enteredUsername"].trim().length === 0 ||
      enteredUserInput["enteredAge"].trim().length === 0
    ) {
      return;
    }
    if (+enteredUserInput["enteredAge"] < 1) {
      return;
    }

    let newUser = {
      id: Math.random().toString(),
      name: enteredUserInput["enteredUsername"],
      age: enteredUserInput["enteredAge"],
    };
    props.onAddUser(newUser);

    setEnteredUserInput({
      enteredAge: "",
      enteredUsername: "",
    });
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserInput((prevState) => {
      return { ...prevState, enteredUsername: event.target.value };
    });
  };
  const ageChangeHandler = (event) => {
    setEnteredUserInput((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandle}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserInput["enteredUsername"]}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredUserInput["enteredAge"]}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
