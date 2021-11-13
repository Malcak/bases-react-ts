import CounterAction from '../actions/actionTypes';
import CounterState from '../interfaces/counterState';

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

export default counterReducer;
