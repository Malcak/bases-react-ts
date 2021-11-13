import { useState } from 'react';

interface CounterProps {
  initValue?: number;
}

export const Counter = ({ initValue = 0 }: CounterProps) => {
  const [counter, setCounter] = useState(initValue);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
