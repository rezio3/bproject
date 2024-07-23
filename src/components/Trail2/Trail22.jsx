import React, { useState } from "react";

const Trail22 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "palenie tytoniu";
  const inputHandler = (e) => {
    const text = e.target.value.toLowerCase();
    setInputTxt(text);
    setErr(false);
  };
  const nextBtnHandler = () => {
    if (inputTxt === pass) {
      props.setNextTrail(2);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <span>
        Co jest zabronione przed wejściem do I Liceum Ogólnokształcącego?
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

export default Trail22;
