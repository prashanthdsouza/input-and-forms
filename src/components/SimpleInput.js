import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail,setEnteredEmail] =useState('');
  const [enteredEmailTouched, setEnteredEmailTouched]=useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid =!enteredEmailIsValid && enteredEmailTouched;

  let formIsValid=false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid=true;
  }
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler=event=>{
    setEnteredEmail(event.target.value);
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!formIsValid){
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredEmail('');
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler=event=>{
    setEnteredEmailTouched(true);
  }

 
  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

    const emailInputClasses = emailInputIsInvalid ? 'form-control invalid':'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;