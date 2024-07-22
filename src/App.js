import { useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import "./style/button.scss";
import Trail1 from "./components/Trail1";
import Trail2 from "./components/Trail2";
import Trail3 from "./components/Trail3";

function App() {
  const [trailActive, setTrailActive] = useState("menu");
  const trailButtonHandler = (e) => {
    setTrailActive(e.target.id);
  };
  const trailPageToDisplay = () => {
    switch (trailActive) {
      case "trail1":
        return <Trail1 />;
      case "trail2":
        return <Trail2 />;
      case "trail3":
        return <Trail3 />;
      default:
        return;
    }
  };
  return (
    <div className="App">
      {trailActive === "menu" ? (
        <MainPage buttonHandler={trailButtonHandler} />
      ) : null}
      {trailPageToDisplay()}
    </div>
  );
}

export default App;
