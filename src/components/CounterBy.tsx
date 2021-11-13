import { useState } from 'react';

interface CounterProps {
  initValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initValue = 0 }: CounterProps) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounterState(({ counter, clicks }: CounterState) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>
        CounterBy: {counter}, Clicks: {clicks}
      </h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
