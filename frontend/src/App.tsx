import reactLogo from "./assets/react.svg";
import { HelloProps } from "./models";
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
const Footer = () => {
  return (
    <div>
      greeting app created by{" "}
      <a href="https://github.com/sleepingpengwing">sleepingpengwing</a>
    </div>
  );
};
function Button(): JSX.Element {
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
}
const Hello = (props: HelloProps) => {
  const { name, age, className } = props;

  return (
    <div className={className}>
      <p>
        Hello world {name}, you are {age} years old
      </p>
    </div>
  );
};
export const App = () => {
  const now: string = new Date().toLocaleDateString();
  const name = "Peter";
  const age = 10;

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
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} className="Eagles" />
        <Hello name={name} age={age} />
        <Footer />
      </div>
    </>
  );
};
