import React, { useState } from "react";

const Trail21 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "solidarność";
  const inputHandler = (e) => {
    const text = e.target.value.toLowerCase();
    setInputTxt(text);
    setErr(false);
  };
  const nextBtnHandler = () => {
    if (inputTxt === pass) {
      props.setNextTrail(1);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <span>
        Jest takie wzgórze, gdzie kamieni stos, a widok jest sztos. Kamieni
        ..naście stoi w jednym rzędzie, słowo na nich hasłem będzie.
      </span>
      <input
        type="text"
        placeholder="hasło..."
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

export default Trail21;
