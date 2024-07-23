import React, { useState } from "react";
import Trail11 from "./Trail1/Trail11";
import Trail12 from "./Trail1/Trail12";
import Trail13 from "./Trail1/Trail13";
import FinalPass1 from "./Trail1/FinalPass1";

const Trail1 = (props) => {
  const [nextTrail, setNextTrail] = useState(0);

  const trailPages1 = [
    <Trail11 setNextTrail={setNextTrail} />,
    <Trail12 setNextTrail={setNextTrail} />,
    <Trail13 setNextTrail={setNextTrail} />,
    <FinalPass1 />,
  ];

  const backBtnHandler = () => {
    props.setTrailActive("menu");
  };

  return (
    <>
      <button className="btn back-btn" id="trail1" onClick={backBtnHandler}>
        Wróć do Menu
      </button>
      {trailPages1[nextTrail]}
    </>
  );
};

export default Trail1;
