import React, { useState } from "react";
import "../style/mainPage.scss";

const MainPage = (props) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [err, setErr] = useState(false);

  const input1Handler = (e) => {
    const text = e.target.value.toLowerCase();
    setErr(false);
    setInput1(text);
  };
  const input2Handler = (e) => {
    const text = e.target.value.toLowerCase();
    setErr(false);
    setInput2(text);
  };
  const input3Handler = (e) => {
    const text = e.target.value.toLowerCase();
    setErr(false);
    setInput3(text);
  };

  const nextBtnHandler = () => {
    if (input1 === "na" && input2 === "po" && input3 === "li") {
      props.setFinalPass(true);
    } else {
      setErr(true);
    }
  };
  return (
    <>
      <h2>Witajcie podróżnicy!</h2>
      <span>
        Przed wami sprawdzian umiejętności poznawczych, pamięciowych i wiedzy o
        Lubinie. Musicie odgadnąć wszyskie zagadki i zebrać 3 ostateczne hasła,
        które doprowadzą was do celu.
      </span>
      <span>
        Będzie szybciej jeżeli podzielicie się na 3 grupy - każda innym
        szlakiem. Musicie jednak być w kontakcie, ponieważ 3 ostateczne hasła
        stanowią całość rozwiązania.
      </span>
      <span>Powodzenia!</span>
      <div className="menu-buttons-container">
        <button className="btn" id="trail1" onClick={props.buttonHandler}>
          Szlak 1
        </button>
        <button className="btn" id="trail2" onClick={props.buttonHandler}>
          Szlak 2
        </button>
        <button className="btn" id="trail3" onClick={props.buttonHandler}>
          Szlak 3
        </button>
      </div>
      <div className="finalInputsContainer">
        <div className="inner-final-box">
          <label>Hasło 1: </label>
          <input
            type="text"
            onChange={input1Handler}
            className="inputText finalInput"
            value={input1}
          />
        </div>
        <div className="inner-final-box">
          <label>Hasło 2:</label>{" "}
          <input
            type="text"
            onChange={input2Handler}
            className="inputText finalInput"
            value={input2}
          />
        </div>
        <div className="inner-final-box">
          <label>Hasło 3: </label>
          <input
            type="text"
            onChange={input3Handler}
            className="inputText finalInput"
            value={input3}
          />
        </div>
      </div>
      <button className="btn" onClick={nextBtnHandler}>
        Dalej
      </button>
      {err ? <span className="err-span">Błędne hasło</span> : null}
    </>
  );
};

export default MainPage;
