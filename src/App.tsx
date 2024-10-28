import { useState } from 'react';
import Card from './components/Card'
import Form from './components/Form'
import NavBar from './components/NavBar'
import './App.css';

function App() {
  const [formOrCard, setFormOrCard] = useState<boolean>(false)
  return (
    <>
      <NavBar/>
      <div className="app__wrapper">

      <button className="button" onClick={() => setFormOrCard(formOrCard => !formOrCard)}>Switch to {formOrCard ? "Form" : "Card"}</button>
      {formOrCard ? <Card/> : <Form />}
      </div>
    </>
  )
}

export default App
