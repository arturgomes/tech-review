# Counter Component

The `Counter` component is a functional React component that demonstrates the use of various hooks for managing global state, optimizing performance, and handling DOM elements. It leverages the `useCounter` hook to access global counter state and dispatch actions.

## Purpose

The `Counter` component showcases several React concepts, including:

1. **Global State Management**: Uses the `useCounter` hook to access and manipulate global state through `CounterContext`.
2. **Performance Optimization**: Utilizes `useMemo` and `useCallback` to optimize rendering and avoid unnecessary recalculations.
3. **Direct DOM Access**: Uses `useRef` to interact with DOM elements directly, such as focusing an input on specific actions.

## Key Features and Hooks Used

### 1. `useMemo`

`useMemo` is used to memoize the calculation of `doubleCount`, which is the doubled value of the current counter. This optimization prevents recalculating `doubleCount` on every render unless `state.count` changes.

- **Purpose**: Enhances performance by avoiding redundant calculations.
- **Usage**: `doubleCount` is recalculated only when `state.count` changes, reducing computation load.

```javascript
const doubleCount = useMemo(() => {
  console.log("Calculating double count...");
  return state.count * 2;
}, [state.count]);
```

### 2. `useCallback`

`useCallback` memoizes the `handleIncrement`, `handleDecrement`, and `handleReset` functions to prevent re-creating these functions on every render. This approach is useful for performance optimization, especially when passing functions as props to child components.

- **Purpose**: Reduces re-renders by ensuring that the functions maintain stable references unless dependencies change.
- **Usage**: Each function updates the counter based on the action type and is wrapped in `useCallback` to minimize function re-creation.

```javascript
const handleIncrement = useCallback(() => {
  dispatch({ type: 'increment' });
}, [dispatch]);

const handleDecrement = useCallback(() => {
  dispatch({ type: 'decrement' });
}, [dispatch]);

const handleReset = useCallback(() => {
  dispatch({ type: 'reset' });
  if (inputRef.current) {
    inputRef.current.focus(); // Focuses the input field on reset
  }
}, [dispatch]);
```

### 3. `useRef`

`useRef` is used to reference the input element without causing re-renders when the reference is updated. In this component, it’s used to focus the input field when the counter is reset, providing a better user experience.

- **Purpose**: Allows direct interaction with the DOM, such as focusing elements.
- **Usage**: After resetting the counter, `inputRef.current.focus()` sets the focus to the input field.

```javascript
const inputRef = useRef<HTMLInputElement>(null);

const handleReset = useCallback(() => {
  dispatch({ type: 'reset' });
  if (inputRef.current) {
    inputRef.current.focus();
  }
}, [dispatch]);
```

### Counter Actions

The component offers three main actions through buttons:

- **Increment**: Increases the counter by 1.
- **Decrement**: Decreases the counter by 1.
- **Reset**: Resets the counter to its initial value and focuses the input field.

Each of these actions triggers a dispatch event handled by the reducer function in `CounterContext`.

### Component Structure

The component layout includes:

1. **Counter Display**: Shows the current count from global state.
2. **Double Count Display**: Displays `doubleCount`, memoized to avoid unnecessary calculations.
3. **Action Buttons**: Provides buttons for incrementing, decrementing, and resetting the counter.
4. **Input Field**: An input field that gains focus when the counter is reset.

```jsx
return (
  <div>
    <h2>Counter: {state.count}</h2>
    <h3>Double Count (Memoized): {doubleCount}</h3>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    <br />
    <input ref={inputRef} placeholder="Focus on reset" style={{ marginTop: '10px' }} />
  </div>
);
```

## Conclusion

The `Counter` component provides an example of how to manage and display global state using a variety of React hooks. By combining `useMemo`, `useCallback`, and `useRef`, this component optimizes performance and enhances user experience. It serves as a practical illustration of how to integrate state management, performance optimization, and direct DOM manipulation within a React component.
