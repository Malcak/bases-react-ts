import { useReducer } from 'react';

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };

    case 'increaseBy':
      const { counter, changes } = state;
      return {
        counter: counter + action.payload.value,
        changes: changes + 1,
        previous: counter,
      };

    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };
  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1>CounterReducer:</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
    </>
  );
};
