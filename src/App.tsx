import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import "./App.css";

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
    <>
      <NavBar />
      <div className="app__wrapper">
        <button className="button" onClick={() => setFormOrCard(!formOrCard)}>
          Switch to {formOrCard ? "Card" : "Form"}
        </button>
        {formOrCard ? ( <Form /> ) : ( <Card /> )}
      </div>
    </>
  );
}

export default App;
