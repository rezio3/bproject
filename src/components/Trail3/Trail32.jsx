import React, { useState } from "react";

const Trail32 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "czernica";
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
        Teraz udajcie się w miejsce gdzie stoi kamienny pan. Na nazwisko miał
        Wyżykowski, a na imię Jan. Nie był zbyt związany z surowcami i
        kruszcami. Mimo to znajdziecie ich tam sporo. Hasło to nazwa
        miejscowości, z której sprowadzono Granit Strzegomski.
      </span>
      <input
        type="text"
        placeholder="miejscowość..."
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

export default Trail32;
