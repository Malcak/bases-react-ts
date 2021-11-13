import { useReducer } from 'react';
import CounterState from './interfaces/counterState';
import counterReducer from './reducers/counterReducer';
import { doIncreaseBy, doReset } from './actions/actionTypes';

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch(doReset());
  };
  const increaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>CounterReducerSegmented:</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};
