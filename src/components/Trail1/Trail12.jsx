import React, { useState } from "react";

const Trail12 = (props) => {
  const [inputTxt, setInputTxt] = useState("");
  const [err, setErr] = useState(false);

  const pass = "tomy";
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
      <span>Mamy to!</span>
      <span>
        Idziecie na imprezę. Trzeba się jakoś ubrać. Idźcie w stronę rynku. Na
        przeciwko ratusza znajdziecie sklep o nazwie Studio Mody Męskiej.
        Przyjrzyjcie się nazwie, niech wasz wzrok nie ominie koloru czerwonego.
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

export default Trail12;
