import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(5);
  console.log("COMPONENT HAS BEEN EXECUTED AGAIN");
  console.log(`num: ${num}`);

  const changeNum = () => {
    setNum((prev) => {
      return prev + 1;
    });
  };
  return (
    <>
      <p>The counter is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </>
  );
}
