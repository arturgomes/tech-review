Here’s a `README.md` focused solely on explaining **DOM Manipulation and Event Handling** concepts within the `Button` component:

---

# Button Component: DOM Manipulation and Event Handling

This `Button` component demonstrates important concepts in **DOM Manipulation** and **Event Handling** in React. We focus on using `querySelector` for direct DOM manipulation, handling events with both React’s synthetic event system and native DOM listeners, and controlling **event propagation**.

## Key Concepts

### 1. Event Handling with React's `onClick` (Primary Button)

The primary button (`button--primary`) showcases **React’s synthetic event handling** using an `onClick` event. This event handler:
- **Logs** a message to the console each time the button is clicked.
- **Stops Event Propagation**: `event.stopPropagation()` is used to prevent the event from bubbling up to parent elements, ensuring that only the primary button’s `onClick` handler responds to the click, without affecting the parent `div`.

> **Usage in the Component**: Check the `handlePrimaryButtonClick` function, where `stopPropagation()` is applied to control event propagation.

### 2. Direct DOM Manipulation with `querySelector`

To illustrate **direct DOM manipulation** in React, we use `querySelector` to select the primary button from the DOM. While React generally abstracts away direct DOM access, using `querySelector` here demonstrates:
- **Accessing and Manipulating DOM Elements**: By selecting the `.button--primary` element, we can apply effects outside React’s synthetic event system.
- **Native Event Handling**: We attach a native event listener (`addEventListener`) to the button, which allows us to handle native `click` events and manipulate styles.

> **Usage in the Component**: See the `useEffect` hook, where `querySelector` is used to select the primary button and apply a native event listener.

### 3. Temporary Style Changes on Click (DOM Manipulation)

Within the native event listener attached via `useEffect`, we manipulate the primary button's style to provide feedback on click:
- **Color Change**: The button temporarily changes color (to red) when clicked, giving visual feedback to the user.
- **Timeout to Revert Style**: After a brief period, the background color reverts to its original, demonstrating how to apply temporary style changes.

> **Usage in the Component**: In the `handleClick` function (inside `useEffect`), where the background color is temporarily set to red and then reset with `setTimeout`.

### 4. Cleanup with `removeEventListener`

Using `addEventListener` directly on the DOM requires manual cleanup to prevent memory leaks. In the component:
- **Cleanup Function**: We remove the event listener in the `useEffect` cleanup function to ensure no lingering event listeners remain when the component unmounts.

> **Usage in the Component**: The cleanup function inside `useEffect` uses `removeEventListener` to remove the click listener from `.button--primary`.

### 5. Event Bubbling with the Secondary Button

The secondary button (`button--secondary`) demonstrates **event propagation** (bubbling):
- **No `stopPropagation`**: Unlike the primary button, the secondary button’s click event does not stop propagation.
- **Propagation to Parent**: When clicked, the event bubbles up and triggers the `onClick` handler on the parent `div`, showing how events propagate up the DOM tree.

> **Usage in the Component**: Check the `handleSecondaryButtonClick` function and the `div`'s `onClick` listener, which logs when the event bubbles up from the secondary button.

---

## Summary

This component is an example of integrating **React's synthetic event system** with **native DOM manipulation** to provide interactive functionality. Key takeaways include:

- **React Synthetic Event Handling** (`onClick`) for initial event capture.
- **Native DOM Manipulation** (`querySelector`, `addEventListener`) for direct element access and style changes.
- **Event Propagation Control** (`stopPropagation` to prevent bubbling).
- **Event Bubbling** to demonstrate how unhandled events reach parent elements.

This setup provides a comprehensive look into DOM manipulation and event handling in React, making it an excellent example for learning these concepts.