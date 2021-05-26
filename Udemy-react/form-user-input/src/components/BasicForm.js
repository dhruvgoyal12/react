import useInput from "../hooks/use-input";
import Input from "./Input";

const BasicForm = (props) => {
  const nameValidator = (value) => value.trim() !== "";

  const {
    value: enteredFirstName,
    hasErrors: firstNameIsInvalid,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    isValid: firstNameIsValid,
    reset: clearFirstName,
  } = useInput(nameValidator);

  const {
    value: enteredLastName,
    hasErrors: lastNameIsInvalid,
    changeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    isValid: lastNameIsValid,
    reset: clearLastName,
  } = useInput(nameValidator);

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

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    clearEmail();
    clearFirstName();
    clearLastName();
  };

  const firstNameInputClasses = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <Input
          id="name"
          type="text"
          onChange={firstNameChangeHandler}
          value={enteredFirstName}
          onBlur={firstNameBlurHandler}
          label="First Name"
          inputClasses={firstNameInputClasses}
          inputInvalidator={firstNameIsInvalid}
          errorText=" First Name must not be empty"
        />
        <Input
          id="name"
          type="text"
          onChange={lastNameChangeHandler}
          value={enteredLastName}
          onBlur={lastNameBlurHandler}
          label="Last Name"
          inputClasses={lastNameInputClasses}
          inputInvalidator={lastNameIsInvalid}
          errorText=" Last Name must not be empty"
        />
      </div>
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

export default BasicForm;
