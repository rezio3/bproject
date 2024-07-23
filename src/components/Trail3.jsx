import React from "react";

const Trail3 = (props) => {
  const backBtnHandler = () => {
    props.setTrailActive("menu");
  };
  return (
    <>
      <button className="btn back-btn" id="trail1" onClick={backBtnHandler}>
        Wróć do Menu
      </button>
      <h1>Trail3</h1>
    </>
  );
};

export default Trail3;
