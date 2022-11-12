import React, { useState, useEffect } from "react";

const ControlledCopmonents = () => {
  const [fullName, setFullName] = useState("");

  function onBtnClicked() {
    setFullName("AMEED OMAR");
  }
  return (
    <>
      <div>
        <button onClick={onBtnClicked}>Fill Your Name</button>
      </div>
      <NameForm fullName={fullName} />
    </>
  );
};
export default ControlledCopmonents;

function NameForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function onTextChanged(e) {
    const field = e.target.id;
    if (field == "firstName") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  }
  useEffect(() => {
    const firstName = props.fullName.split(" ")[0];
    const lastName = props.fullName.split(" ")[1];
    setFirstName(firstName);
    setLastName(lastName);
  }, [props.fullName]);
  return (
    <div>
      {" "}
      <div>
        {" "}
        <label htmlFor="#firstName"> First Name </label>
        <input
          value={firstName}
          onChange={onTextChanged}
          id={"firstName"}
          type="text"
        ></input>
        <label htmlFor="#lastName"> Last Name </label>
        <input
          value={lastName}
          onChange={onTextChanged}
          id={"lastName"}
          type="text"
        ></input>
      </div>
    </div>
  );
}

// I want to link input with state =? this is what controlled component do
