Here’s a structured `README.bem.md` file that describes the project, its components, and the BEM structure applied to each part.

---

# BEM-Based React Component Exercise

This project is a simple React application that demonstrates the **BEM (Block Element Modifier)** methodology for structuring CSS classes. Each component follows BEM conventions to keep styling modular, readable, and easy to maintain.

## Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Components and BEM Structure](#components-and-bem-structure)
4. [BEM Rules Applied](#bem-rules-applied)
5. [Getting Started](#getting-started)

---

## Overview

The application consists of multiple components (NavBar, Form, Card, and Button) that each follow **BEM naming conventions** for their CSS classes. Using BEM helps to organize the structure of the CSS, maintain separation of concerns, and enable scalable styling for larger projects.

---

## Project Structure

The main components of the app include:

- **App**: The main application component that manages the state to toggle between displaying the `Form` and `Card` components.
- **NavBar**: A navigation bar component styled with BEM for modularity.
- **Form**: A form component with error validation that applies BEM modifiers for styling error states.
- **Card**: A card component that contains an image, title, description, and footer with a `Button`.
- **Button**: A standalone button component that offers both primary and secondary styles using BEM modifiers.

---

## Components and BEM Structure

### App Component

- **Block**: `.app`
- **Element**:
  - `.app__wrapper`: Wrapper div in `App` to align child components vertically with spacing.
- **Modifier**: None in `App`.

**Code Example**:
```css
.app__wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;
  gap: 32px;
}
```

### NavBar Component

- **Block**: `.nav`
- **Elements**:
  - `.nav__list`: List wrapper for navigation items.
  - `.nav__item`: Individual navigation item.
  - `.nav__link`: Anchor tag inside each item.
- **Modifier**: `.nav__item--active` applies styles to highlight the active link.

**Code Example**:
```css
.nav {
  background-color: #333;
  padding: 10px;
  width: 100%;
}

.nav__item--active .nav__link {
  font-weight: bold;
  color: #ff0;
}
```

### Form Component

- **Block**: `.form`
- **Elements**:
  - `.form__group`: Groups label and input fields together.
  - `.form__label`: Styles the form label.
  - `.form__input`: Basic styling for all input fields.
  - `.form__error`: Styles error messages to indicate validation issues.
  - `.form__button`: Form button.
- **Modifier**:
  - `.form__input--error`: Highlights the input field in red when empty.
  - `.form__button--primary`: Styles the submit button with primary colors.

**Code Example**:
```css
.form__input--error {
  border-color: red;
}

.form__button--primary {
  background-color: #3498db;
  color: #fff;
}
```

### Card Component

- **Block**: `.card`
- **Elements**:
  - `.card__wrapper`: Wrapper for the entire card component.
  - `.card__container`: Container for card contents.
  - `.card__image`: Image at the top of the card.
  - `.card__title`: Title of the card.
  - `.card__description`: Text description within the card.
  - `.card__footer`: Footer area containing buttons or actions.
  - `.card__button`: Button within the card footer.
- **Modifier**:
  - `.card__button--primary`: Applies primary styling to the card button.

**Code Example**:
```css
.card__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card__button--primary {
  background-color: #28a745;
  color: #fff;
}
```

### Button Component

- **Block**: `.button`
- **Modifier**:
  - `.button--primary`: Styles the button with primary colors.
  - `.button--secondary`: Styles the button with secondary colors.

**Code Example**:
```css
.button--primary {
  background-color: #007bff;
  color: #fff;
}

.button--secondary {
  background-color: #6c757d;
  color: #fff;
}
```

---

## BEM Rules Applied

Each component follows these BEM principles:

1. **Block**: Represents a distinct component (e.g., `.form`, `.card`, `.button`).
2. **Element**: Represents parts of a block that have unique functions within it (e.g., `.form__group`, `.card__title`, `.nav__link`).
3. **Modifier**: Represents variations of a block or element, changing the appearance based on a specific condition (e.g., `.form__input--error` for invalid input, `.button--primary` for primary styling).

### Key BEM Principles

- **Maintainability**: BEM helps keep classes descriptive and modular, making the code easier to maintain and scale.
- **Isolation**: Each component’s styling remains isolated, preventing unwanted style leakage between components.
- **Readability**: The BEM naming convention provides a clear structure, making it easier to locate and understand CSS classes.

---

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.

### Running the Project

Use the following command to start the project:

```bash
npm start
```

---

This README provides an overview of the project’s structure, a breakdown of each component with its BEM classes, and guidelines on the BEM rules applied in the code. This helps maintain a clean, organized, and scalable CSS codebase.