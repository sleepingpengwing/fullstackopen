import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
/* 
  1. Write down the function
    1.1 We need a button
    1.2 We need the button function
    1.3 We need the button value

  2. Figure out what the function returns
    2.1 return a button

  3. Use function in app
*/

const Button = (): JSX.Element => {
  const [count, setcount] = useState<number>(0);
  return (
    <button
      onClick={() => {
        setcount(count + 1);
      }}
    >
      Count is {count}{" "}
    </button>
  );
};

export const App = () => {
  const now: string = new Date().toLocaleDateString();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Button />
      <div className="card">
        <p>Todays date: {now}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
