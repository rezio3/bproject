import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import "./style/button.scss";
import Trail1 from "./components/Trail1";
import Trail2 from "./components/Trail2";
import Trail3 from "./components/Trail3";
import FinalPage from "./components/FinalPage";

function App() {
  const [trailActive, setTrailActive] = useState("menu");
  const [finalPass, setFinalPass] = useState(false);
  const trailButtonHandler = (e) => {
    setTrailActive(e.target.id);
  };
  const trailPageToDisplay = () => {
    switch (trailActive) {
      case "trail1":
        return <Trail1 setTrailActive={setTrailActive} />;
      case "trail2":
        return <Trail2 setTrailActive={setTrailActive} />;
      case "trail3":
        return <Trail3 setTrailActive={setTrailActive} />;
      default:
        return;
    }
  };
  return (
    <div className="App">
      {!finalPass ? (
        <>
          {trailActive === "menu" ? (
            <MainPage
              buttonHandler={trailButtonHandler}
              setFinalPass={setFinalPass}
            />
          ) : null}
          {trailPageToDisplay()}
        </>
      ) : (
        <FinalPage />
      )}
    </div>
  );
}

export default App;
