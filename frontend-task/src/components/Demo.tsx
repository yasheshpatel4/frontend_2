import { useCounter } from "./useCounter";
const Demo=()=> {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Demo;
