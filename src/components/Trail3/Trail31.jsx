import React, { useState } from "react";

const Trail31 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "2016";
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
        Wiecie gdzie wydobywa się miedź? W Lubinie i Polkowicach jest takie
        miejsce. A gdybyśmy chcieli wydobyć lody? Takie truskawkowe albo
        pistacjowe? W Lubinie też jest takie miejsce. Idzcie tam i znajdźcie rok
        jego powstania.
      </span>
      <input
        type="text"
        placeholder="rok..."
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

export default Trail31;
