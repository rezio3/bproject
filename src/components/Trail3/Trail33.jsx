import React, { useState } from "react";
import inka from "../../img/inka.jpg";

const Trail33 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "inka";
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
      <span>Jaki pseudonim nosiła ta dziewczyna?</span>
      <img src={inka} alt="" className="qimg" />
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

export default Trail33;
