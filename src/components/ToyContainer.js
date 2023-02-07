import React from "react";
import ToyCard from "./ToyCard";

////MUST pass toy array from fet into curly brackets {}
function ToyContainer({ toyArray }) {
  const newToyArray = toyArray.map((toy) => {
    return (
      <ToyCard
        key={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
      />
    );
  });




  console.log(newToyArray);

  return (
    <div id="toy-collection"> {newToyArray}</div>
  );
}

export default ToyContainer;


