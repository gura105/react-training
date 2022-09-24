import { FC, useState } from "react";
import Greet from "./components/Greet";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App: FC = () => {
  const n = Math.floor(Math.random() * 10);
  const threashold = 5;

  const name = "george";
  // const greet = (name: string) => `Hi ${name}.`;

  return (
    <>
      {n > threashold && (
        <p>
          {n}は{threashold}よりも大きい値です
        </p>
      )}
      {n > threashold || (
        <p>
          {n}は{threashold}以下の値です
        </p>
      )}
      <p>
        {n}は{n % 2 === 0 ? "偶数" : "奇数"}です
      </p>
      <Greet name={name} times={n} />
    </>
  );
};

export default App;
