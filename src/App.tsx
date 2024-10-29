import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import "./App.css";
import Button from "./components/ButtonGroup/Button";
import { CounterProvider } from "./context/CounterProvider";

function App() {
  /**
   * We'll use useState to manage the form and card view toggle, as well as
   * useEffect to log which view is currently displayed.
   */
  const [formOrCard, setFormOrCard] = useState<boolean>(false);

  // Log the current view when it changes
  useEffect(() => {
    console.log(formOrCard ? "Form view displayed" : "Card view displayed");
  }, [formOrCard]); // Dependency array to log only when formOrCard changes

  return (
    <CounterProvider>
      <NavBar />
      <div className="app__wrapper">
        <Button onClick={() => setFormOrCard(!formOrCard)}>
          Switch to {formOrCard ? "Card" : "Form"}
        </Button>
        {formOrCard ? (
          <Form />
        ) : (
          <Card
            title="Dynamic Card Title"
            description="This description is passed from the App component."
            img="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        )}
      </div>
    </CounterProvider>
  );
}

export default App;
