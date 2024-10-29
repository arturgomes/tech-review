import { createContext } from 'react';

// Define the context type
interface CounterContextType {
  state: { count: number };
  dispatch: React.Dispatch<{ type: 'increment' | 'decrement' | 'reset' }>;
}

// Create the context with an initial undefined value
export const CounterContext = createContext<CounterContextType | undefined>(undefined);
