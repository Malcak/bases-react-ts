import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';
import { CounterEffect } from './components/CounterEffect';
import { CounterHook } from './components/CounterHook';
// import { CounterReducerComponent } from './components/CounterReducer';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';

function App() {
  return (
    <>
      <Counter initValue={10} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
