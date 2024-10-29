import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// Custom hook to use the Counter context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
