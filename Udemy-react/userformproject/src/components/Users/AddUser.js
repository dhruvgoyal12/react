import React, { Fragment, useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserInput, setEnteredUserInput] = useState({
  //   enteredUsername: "",
  //   enteredAge: "",
  // });

  const [error, setError] = useState();

  const addUserHandle = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        text: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        text: "Please enter a valid age",
      });
      return;
    }

    let newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onAddUser(newUser);

    // Should not be done (we should leave updating to react)
    // Doing this as we are using ref here
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    // setEnteredUserInput({
    //   enteredAge: "",
    //   enteredUsername: "",
    // });
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserInput((prevState) => {
  //     return { ...prevState, enteredUsername: event.target.value };
  //   });
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredUserInput((prevState) => {
  //     return { ...prevState, enteredAge: event.target.value };
  //   });
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          text={error.text}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}
