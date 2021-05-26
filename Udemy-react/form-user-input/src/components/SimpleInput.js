import { useRef, useState, useEffect } from "react";
import useInput from "../hooks/use-input";
import Input from "./Input";
const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState("");
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // //const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const enteredEmailIsValid = enteredEmail.trim().includes("@");

  // const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;
  // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  const {
    value: enteredName,
    hasErrors: nameInputIsInValid,
    changeHandler: nameInputChangeHandler,
    blurHandler: nameInputBlurHandler,
    isValid: enteredNameIsValid,
    reset: clearName,
  } = useInput((value) => {
    return value.trim() !== "";
  });

  const {
    value: enteredEmail,
    hasErrors: emailInputIsInvalid,
    changeHandler: emailInputChangeHandler,
    blurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: clearEmail,
  } = useInput((value) => {
    return value.trim().includes("@");
  });

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else setFormIsValid(false);
  // }, [enteredNameIsValid]);
  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    // const enteredValue = nameInputRef.current.value;

    //nameInputRef.current.value = ''; => NOT IDEAL, DO NOT MANIPULATE DOM ON YOUR OWN
    clearName();
    clearEmail();
  };

  // const emailInputChangeHandler = (event) => {
  //   // setEnteredEmailTouched(true);
  //   setEnteredEmail(event.target.value);
  // };

  // const emailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };

  const nameInputClasses = nameInputIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        onChange={nameInputChangeHandler}
        value={enteredName}
        onBlur={nameInputBlurHandler}
        label="Your Name"
        inputClasses={nameInputClasses}
        inputInvalidator={nameInputIsInValid}
        errorText="Name must not be empty"
      />

      <Input
        id="email"
        type="email"
        onChange={emailInputChangeHandler}
        value={enteredEmail}
        onBlur={emailBlurHandler}
        label="Email"
        inputClasses={emailInputClasses}
        inputInvalidator={emailInputIsInvalid}
        errorText="Enter a valid email"
      />

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
