import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  // let counter = 1;
  const addValue = () => {
    // counter = counter + 1;
    // console.log(counter);
    // setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };

  const removeValue = () => {
    setCounter((counter) => (counter > 0 ? counter - 1 : 0));
  };

  return (
    <>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value {counter} </button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
