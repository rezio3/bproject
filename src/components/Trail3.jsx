import React, { useState } from "react";
import Trail31 from "./Trail3/Trail31";
import Trail32 from "./Trail3/Trail32";
import Trail33 from "./Trail3/Trail33";
import FinalPass3 from "./Trail3/FinalPass3";

const Trail3 = (props) => {
  const [nextTrail, setNextTrail] = useState(0);
  const trailPages3 = [
    <Trail31 setNextTrail={setNextTrail} />,
    <Trail32 setNextTrail={setNextTrail} />,
    <Trail33 setNextTrail={setNextTrail} />,
    <FinalPass3 />,
  ];
  const backBtnHandler = () => {
    props.setTrailActive("menu");
  };
  return (
    <>
      <button className="btn back-btn" id="trail1" onClick={backBtnHandler}>
        Wróć do Menu
      </button>
      {trailPages3[nextTrail]}
    </>
  );
};

export default Trail3;
