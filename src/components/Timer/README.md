# Timer Component

The `Timer` component is a React functional component that demonstrates the use of **multiple `useEffect` hooks** to handle different phases of the component lifecycle: mounting, updating with a timer, and unmounting.

## Overview

The `Timer` component displays the elapsed time in seconds since it was mounted. It increments the time every second and logs messages on mount and unmount to illustrate the component's lifecycle in React.

## Key Concepts

This component uses multiple `useEffect` hooks to manage lifecycle stages individually:
1. **Mounting Phase**: Logs a message when the component mounts.
2. **Updating Phase**: Starts an interval timer that updates the elapsed time every second.
3. **Unmounting Phase**: Logs a message and clears the interval when the component unmounts.

## Code Structure

### `useEffect` for Mounting Phase (Logging on Mount)

```tsx
useEffect(() => {
  console.log("Timer component has mounted.");
}, []);
```

- **Purpose**: This hook logs a message to the console when the component mounts.
- **How It Works**: Since the dependency array is empty (`[]`), this `useEffect` runs only once, behaving like `componentDidMount` in class components.

### `useEffect` for Timer Setup and Cleanup (Updating Phase)

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    setTime((prevTime) => prevTime + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);
```

- **Purpose**: This hook sets up an interval timer to increment the `time` state every second.
- **Cleanup**: The cleanup function `clearInterval(timer)` stops the timer when the component unmounts, preventing memory leaks.
- **How It Works**: Like the previous `useEffect`, this one also runs only once due to the empty dependency array, starting the timer on mount and cleaning up on unmount.

### `useEffect` for Unmounting Phase (Logging on Unmount)

```tsx
useEffect(() => {
  return () => {
    console.log("Timer component is unmounting, cleanup complete.");
  };
}, []);
```

- **Purpose**: This hook logs a message to the console when the component is unmounted.
- **How It Works**: The empty dependency array ensures this hook only runs its cleanup function when the component unmounts, simulating `componentWillUnmount`.

## Why Multiple `useEffect`s?

Using separate `useEffect` hooks for each phase makes the code:
- **More Readable**: Each hook has a single responsibility, making it easy to understand and maintain.
- **Easier to Manage**: You can clearly see which code runs on mount, which handles the timer updates, and which code is responsible for unmount cleanup.

## Example Usage

To see this component in action, you can add a toggle button in a parent component to mount and unmount the `Timer`:

```tsx
import React, { useState } from "react";
import Timer from "./Timer";

const App: React.FC = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  );
};

export default App;
```

## Summary

This `Timer` component illustrates lifecycle management in React with multiple `useEffect` hooks:
- **Mounting Phase**: Logs "Timer component has mounted."
- **Updating Phase**: Increments time every second.
- **Unmounting Phase**: Clears the timer and logs "Timer component is unmounting, cleanup complete."

This example is helpful for understanding how to handle lifecycle events with multiple `useEffect` hooks, especially in cases where you have different logic for mounting, updating, and unmounting.