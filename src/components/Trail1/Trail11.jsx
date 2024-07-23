import React, { useState } from "react";

const Trail11 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "lipiec";
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
        Przy niedalekiej świątyni, stoi duży kamień z niejakim ptakiem będący
        godłem Polski. Jak możecie się domyślić, został on postawiony nie bez
        przyczyny. Jednak teraz, bardziej od przyczyny interesuje nas miesiąc
        zbudowania tego pomnika.
      </span>
      <input
        type="text"
        placeholder="miesiac..."
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

export default Trail11;
