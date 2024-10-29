# React Component and State Management Exercise

This project is a React application that explores component styling with **BEM (Block Element Modifier)** methodology, global state management with **Context and custom hooks**, and efficient rendering techniques using **React hooks**. Each component is built with modularity, reusability, and performance in mind.

## Table of Contents

- [React Component and State Management Exercise](#react-component-and-state-management-exercise)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Topics Covered](#topics-covered)
    - [BEM (Block Element Modifier) Methodology](#bem-block-element-modifier-methodology)
    - [State Management with Context and Reducers](#state-management-with-context-and-reducers)
    - [Custom Hooks](#custom-hooks)
    - [React Component Lifecycle and Hooks](#react-component-lifecycle-and-hooks)
  - [File Structure](#file-structure)

---

## Introduction

This application includes components such as `NavBar`, `Form`, `Card`, `Button`, and `Counter`, each designed to demonstrate different React concepts. We use BEM conventions for styling, `Context` for managing global state, and various React hooks to manage side effects, optimize rendering, and access the DOM.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/arturgomes/tech-review
   ```
2. Navigate into the project directory:
   ```bash
   cd tech-review
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the application by running:

```bash
npm start
```

This will launch the application in development mode. Open your browser to `http://localhost:5173` to view it.

## Topics Covered

### BEM (Block Element Modifier) Methodology

The project uses BEM to organize CSS, making it modular, scalable, and easy to maintain. Each component has a clear structure:
- **Blocks** are standalone entities (e.g., `button`, `form`).
- **Elements** are parts of blocks (e.g., `form__label`, `button__icon`).
- **Modifiers** represent variations of blocks or elements (e.g., `button--primary`, `form__input--error`).

For a detailed explanation, refer to the [BEM Documentation](README.bem.md).

### State Management with Context and Reducers

To manage global state, we created a `CounterContext` using React's `Context API` combined with a `useReducer` hook. This approach centralizes state logic, making it easy to share and update state across components. The `Counter` component demonstrates incrementing, decrementing, and resetting a global counter, showing the benefits of using Context for state management in larger applications.

For a detailed explanation, refer to the [Context Documentation](src/context/README.md).

### Custom Hooks

Custom hooks are used to encapsulate logic and simplify component code. Key custom hooks in this project:
- **`useCounter`**: Manages the counter's state by providing the current count and dispatch functions.
- **`useForm`**: Manages form-related state and validation, keeping the logic separate from UI components for better reusability and testing.

These custom hooks make components cleaner and more modular, allowing state logic to be shared across different parts of the app.

For a detailed explanation, refer to the [React Hooks Documentation](src/hooks/README.md).

### React Component Lifecycle and Hooks

We explore various lifecycle hooks to handle different component states (`useState`) and effects (`useEffect`). The project also uses `useMemo` and `useCallback` to optimize performance by avoiding unnecessary recalculations and function recreations, employed for performance optimization:

- **`useEffect`**: Used to handle side effects like logging, API calls, and cleanup. The `Timer` component illustrates mounting, unmounting, and updates. (see [Timer Life Cycle Documentation](src/components/Timer/README.md))
- **`useMemo`**: In the `Counter` component, memoizes the calculation of `doubleCount` to avoid redundant computations. 
- **`useCallback`**: In the `Counter` component, memoizes event handlers (`handleIncrement`, `handleDecrement`, and `handleReset`) to prevent re-creating them on every render. 
- **`useRef`**: Provides a way to access DOM elements directly, as shown in the `Counter` component for focusing on an input field after a reset. (see [Timer Life Cycle Documentation](src/components/Counter/README.md))

These techniques help improve the application’s performance, especially as it scales.

## File Structure

The project is organized into the following key directories:
- **`components/`**: Contains UI components like `NavBar`, `Form`, `Card`, `Button`, `ButtonGroup`, and `Counter`. Some of these components are used in each other, like `Button`, `ButtonGroup`, and `Counter`.
- **`hooks/`**: Contains custom hooks such as `useCounter` and `useForm` for managing local and global state.
- **`context/`**: Contains `CounterContext` and its provider, which manage the global state for the counter.
- **`styles/`**: Holds CSS files for each component, following the BEM methodology.
