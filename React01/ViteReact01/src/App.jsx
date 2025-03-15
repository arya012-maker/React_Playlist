import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);
  const value = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };
  return (
    <>
      x<h1>counter value : {counter}</h1>
      <button onClick={value}>add value</button>
      <button>substract value</button>
    </>
  );
}

export default App;
