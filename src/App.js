import { useState } from "react";
import "./styles.css";

export default function App() {
  const [increment, setIncrement] = useState(0);
  // const [decrement, setDecrement] = useState(0);

  //console.log(increment);
  const handleAsync = () => {
    console.log("inside async", increment);
    setTimeout(() => {
      // setIncrement(increment + 1);
      setIncrement((currentState) => currentState + 1);
    }, 3000);
  };
  console.log("increment", increment);
  return (
    <div className="App">
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
      <button onClick={() => setIncrement(increment - 1)}>Decrement</button>
      {/* <button onClick={() => setDecrement(decrement - 1)}>Decrement</button> */}

      <h1>{increment}</h1>
      {/* <h2>{decrement}</h2> */}

      <button onClick={handleAsync}>Async-increment</button>
    </div>
  );
}
