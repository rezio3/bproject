import React from "react";
import "../style/mainPage.scss";

const MainPage = (props) => {
  return (
    <>
      <h2>Witajcie podróżnicy!</h2>
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
