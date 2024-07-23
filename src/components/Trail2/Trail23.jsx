import React, { useState } from "react";

const Trail23 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "38";
  const inputHandler = (e) => {
    const text = e.target.value.toLowerCase();
    setInputTxt(text);
    setErr(false);
  };
  const nextBtnHandler = () => {
    if (inputTxt === pass) {
      props.setNextTrail(3);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <span>
        Idzcie do miejsca, gdzie toczy się walka pomiędzy wężem, a świętym.
        Hasłem jest ilość sylab w modlitwie.
      </span>
      <input
        type="text"
        placeholder="..."
        className="inputText"
        value={inputTxt}
        onChange={inputHandler}
      ></input>
      <button className="btn next-btn" onClick={nextBtnHandler}>
        Dalej
      </button>
      {err ? <span className="err-span">Błędne hasło</span> : null}
    </>
  );
};

export default Trail23;
