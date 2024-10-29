import React, { useCallback, useMemo, useRef } from 'react';
import { useCounter } from '../../hooks/useCounter';

const Counter: React.FC = () => {
  const { state, dispatch } = useCounter();
  const inputRef = useRef<HTMLInputElement>(null);

  // useMemo: Memoize the calculation of the double count to optimize performance.
  const doubleCount = useMemo(() => {
    console.log("Calculating double count...");
    return state.count * 2;
  }, [state.count]);

  // useCallback: Memoize the handleClick function to avoid unnecessary re-renders.
  const handleIncrement = useCallback(() => {
    dispatch({ type: 'increment' });
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: 'decrement' });
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch({ type: 'reset' });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [dispatch]);

  return (
    <div >
      <h2>Counter: {state.count}</h2>
      <h3>Double Count (Memoized): {doubleCount}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <br />
      <input ref={inputRef} placeholder="Focus on reset" style={{ marginTop: '10px' }} />
    </div>
  );
};

export default Counter;
