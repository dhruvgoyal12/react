import React, { useState } from "react";

export default function useInput(validatorFunction) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validatorFunction(enteredValue);
  const hasErrors = !valueIsValid && isTouched;

  const changeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const blurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasErrors,
    changeHandler,
    blurHandler,
    isValid: valueIsValid,
    reset,
  };
}
