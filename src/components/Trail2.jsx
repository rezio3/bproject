import React, { useState } from "react";
import Trail21 from "./Trail2/Trail21";
import Trail22 from "./Trail2/Trail22";
import Trail23 from "./Trail2/Trail23";
import FinalPass2 from "./Trail2/FinalPass2";

const Trail2 = (props) => {
  const [nextTrail, setNextTrail] = useState(0);
  const trailPages2 = [
    <Trail21 setNextTrail={setNextTrail} />,
    <Trail22 setNextTrail={setNextTrail} />,
    <Trail23 setNextTrail={setNextTrail} />,
    <FinalPass2 />,
  ];
  const backBtnHandler = () => {
    props.setTrailActive("menu");
  };
  return (
    <>
      <button className="btn back-btn" id="trail1" onClick={backBtnHandler}>
        Wróć do Menu
      </button>
      {trailPages2[nextTrail]}
    </>
  );
};

export default Trail2;
