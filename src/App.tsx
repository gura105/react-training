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

    <form>
      <label htmlFor="favChar">好きなキャラクターは？</label>
      <select id="favChar" defaultValue="fox">
        <option value="rabbit">パティ</option>
        <option value="bear">ボビー</option>
        <option value="fox">ダイアナ</option>
        <option value="pig">プリプリン</option>
      </select>
    </form>
    <label htmlFor="favReason">そのキャラクターのどこが好き？</label>
    <textarea id="favReason" defaultValue="【例】見た目が好き"></textarea>
  </div>
);

export default App;
