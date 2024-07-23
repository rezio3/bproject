import React, { useState } from "react";

const Trail13 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "piaskowiec";
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
      <span>Gratulacje!</span>
      <span>
        Teraz udajcie się w miejsce gdzie stoi kamienny pan. Na nazwisko miał
        Wyżykowski, a na imię Jan. Nie był zbyt związany z surowcami i
        kruszcami. Mimo to znajdziecie ich tam sporo. Hasło to nazwa kamienia,
        który jest żółty. Możecie znaleźć ich kilka. Jeden jedyny jest tym, o
        który się rozchodzi.
      </span>
      <input
        type="text"
        placeholder="kruszec..."
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

export default Trail13;
