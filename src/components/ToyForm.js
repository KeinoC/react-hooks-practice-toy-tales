import React, {useState} from "react";

////Toy state
//// handle submit / create object



/////received renderToy from App.js as prop
function ToyForm({renderToy}) {

const [newToy, setNewToy] = useState({
  image: "",
  name: ""
})

function handleNewToy (e) {
  setNewToy({...newToy, [e.target.name]:e.target.value})
  console.log(newToy)
}





function handleSubmit (e) {
  e.preventDefault();
  const newToyObj = {
    name: newToy.name,
    image: newToy.image
  }
  e.target.reset() /// Reset form
  console.log(newToyObj)
  
  ////render to dom, function created in App.js and passed as prop
  renderToy(newToyObj)


/////post request portion of handle submit
fetch("http://localhost:3001/toys", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newToyObj),
})
  .then((response) => response.json())
  .then((response) => renderToy(response));
}


  return (
    <div className="container">
      <form 
      onSubmit = {handleSubmit}
      className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange = {handleNewToy}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange = {handleNewToy}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input

          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
