import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

///Deliverable #1 Fetching original toy data
// useEffect structure for reference::::  useEffect (()=>{fetch},[])

useEffect (()=>{
  fetch ("http://localhost:3001/toys")
  .then (res => res.json())
  .then (data => setToyArray(data))
},
[])

//// const [variableName, setVariableName] = useState( default generally empty: Array[] or String "")

  const [toyArray, setToyArray] = useState([])

  

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }


  ///renderToy function handles showing new toy to DOM
  function renderToy (newToyObj) {
    const renderedArray = [...toyArray, newToyObj]
    setToyArray(renderedArray)
  }


  return (
    <>
      <Header />

      {/* ///pass renderToy to ToyForm as a prop */}
      {showForm ? <ToyForm renderToy={renderToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray = {toyArray} />
    </>
  );
}

export default App;
