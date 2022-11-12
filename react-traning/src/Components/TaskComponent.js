import React, { useState, useEffect } from "react";

const TaskComponent = () => {
  return (
    <>
      <YourNameForm />
    </>
  );
};
export default TaskComponent;

function YourNameForm(props) {
  const [yourName, setYourName] = useState("");
  const [flag, setFlag] = useState(false);

  function onTextChanged(e) {
    setYourName(e.target.value);
    console.log("BAaaaaataaaaaaaaaaata");
  }

  function onMotivateClicked() {
    setFlag(!flag);
  }
  return (
    <div>
      {" "}
      <div>
        {" "}
        <label htmlFor="#yourName"> Your Name </label>
        <input
          value={yourName}
          onChange={onTextChanged}
          id={"yourName"}
          type="text"
        ></input>
        {yourName != "" && flag == false ? (
          <label> Hi {yourName} How are You ?</label>
        ) : (
          ""
        )}
      </div>
      <button onClick={onMotivateClicked.bind(this)}>Motivate</button>
      {flag == true ? <label> Hay {yourName} Keep going</label> : ""}
    </div>
  );
}

// I want to link input with state =? this is what controlled component do
