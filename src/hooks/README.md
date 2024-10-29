# React Hooks Documentation

This directory contains custom hooks designed to streamline common patterns in our React application. These hooks help manage form state (`useForm`) and global counter state (`useCounter`), making components more modular, reusable, and easy to understand.

## Folder Structure

```
hooks/
├── useForm.ts          # Custom hook for handling form state and validation
├── useCounter.ts       # Custom hook for accessing and managing global counter state
```

## Overview of Hooks

### 1. `useForm`

`useForm` is a custom hook crafted to simplify the process of managing form inputs, validation, and submission. This hook encapsulates the complexities of form handling into a single reusable unit, making form components cleaner and easier to maintain.

#### Purpose

- **Manage Input Values**: Keeps track of each form field’s value, updating them in sync with user input.
- **Handle Validation**: Provides built-in validation support to ensure required fields are filled out.
- **Simplify Form Submission**: Centralizes the submission logic, enabling easy access to form data and preventing unnecessary re-renders.

#### How It Works

1. **Initial Values**: The hook accepts an `initialValues` object that defines default values for each form field.
2. **Error Management**: Tracks validation errors, providing feedback on missing or invalid inputs.
3. **Input Change Handling**: A function to handle each input's `onChange` event, updating the values in the state.
4. **Submission Handling**: Includes a `handleSubmit` function that performs validation and triggers a submission callback if all inputs pass validation.

#### Usage Example

In a form component, `useForm` is used to manage form inputs and trigger actions on submission. This structure centralizes form logic, reducing duplication and enhancing readability.

---

### 2. `useCounter`

`useCounter` is a custom hook that provides access to a global counter state managed through React's Context API and `useReducer`. By leveraging the context, this hook enables any component within the application to access and update the counter's value, ensuring consistency across components.

#### Purpose

- **Access Global State**: Provides components with the current counter state (`count`) without prop drilling.
- **Dispatch Actions**: Allows components to increment, decrement, or reset the counter using dispatched actions, keeping state modifications centralized.
- **Enforce Usage within Context**: Ensures that components using `useCounter` are wrapped in the necessary context provider.

#### How It Works

1. **Context Access**: This hook retrieves `count` and `dispatch` from the `CounterContext`.
2. **Centralized Dispatch**: Exposes functions to increment, decrement, or reset the counter, utilizing a central reducer to handle these actions predictably.
3. **Error Handling**: Throws an error if the hook is used outside the `CounterProvider` context, encouraging proper use of the context.

#### Usage Example

In any component needing the counter, `useCounter` provides direct access to the counter’s state and dispatch function. This approach eliminates the need for complex prop drilling and makes the counter functionality readily available throughout the app.

---

## Why Use These Custom Hooks?

### Benefits

1. **Code Reusability**: These hooks encapsulate common logic, allowing you to use them across different components without duplicating code.
2. **Improved Separation of Concerns**: Each hook isolates specific logic (`useForm` for form management, `useCounter` for global state), making the codebase more modular and easier to understand.
3. **Enhanced Readability**: By abstracting state management details, components become more focused on rendering and UI, resulting in cleaner, more readable code.
4. **Simplified State Management**: The `useForm` hook handles all aspects of form state and validation, while `useCounter` ensures that counter updates are managed consistently across the app.

### Conclusion

The `useForm` and `useCounter` hooks are essential tools for managing form input and global state, respectively. By encapsulating this logic into reusable hooks, we achieve a more modular, scalable, and maintainable codebase, enabling faster development and easier updates as the application evolves.
