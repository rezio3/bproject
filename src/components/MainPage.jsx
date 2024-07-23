import React from "react";
import "../style/mainPage.scss";

const MainPage = (props) => {
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
    </>
  );
};

export default MainPage;
