// todo:  user input component
// todo: Handling events and two way binding
// todo: Lifting state up
// todo: Outputting reuslts
import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({});

  function handleInputChange(event) {
    const nameField = event.target.id;
    const valueToChange = event.target.value;
    const updatedValue = { [nameField]: valueToChange };
    setUserInput((prevUserInput) => ({ ...prevUserInput, ...updatedValue }));
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} />
      <Result currentUserInput={userInput} />
    </>
  );
}

export default App;
