import React, { useReducer, ReactNode } from 'react';
import { CounterContext } from './CounterContext'; // Import the CounterContext from its new file

interface CounterState {
  count: number;
}

type CounterAction = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

const initialState: CounterState = { count: 0 };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

interface CounterProviderProps {
  children: ReactNode;
}

// Define the CounterProvider component
export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
