import { FC, useState } from "react";
import Greet from "./components/Greet";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import Summary from "./components/Summary";

const App: FC = () => (
  <div className="App">
    <Greet name="Patty" times={4} />
    <Summary title="maple town" folded>
      <p>
        some message about maple town 1 some message about maple town 1 some
        message about maple town 1 some message about maple town 1 some message
        about maple town 1 some message about maple town 1
      </p>
      <p>
        some message about maple town 2 some message about maple town 2 some
        message about maple town 2 some message about maple town 2 some message
        about maple town 2 some message about maple town 2
      </p>
    </Summary>
  </div>
);

export default App;
