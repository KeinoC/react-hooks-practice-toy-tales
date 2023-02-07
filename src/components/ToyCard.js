import React from "react";

function ToyCard(newToyArray) {
    const toyId = newToyArray.id;
    const toyName = newToyArray.name;
    const toyImageUrl = newToyArray.image;
    const toyLikes = newToyArray.likes;

    function handleDelete(e) {
        console.log(e.target.value);

        // Simple DELETE request with fetch
        //   componentDidMount() {
        //     fetch(`http://localhost:3001/toys/${toyId}`, { method: 'DELETE' })
        //         .then(() => this.setState({ status: 'Delete successful' }));
        // }
    }

    return (
        <div className="card">
            <h2>{toyName}</h2>
            <img src={toyImageUrl} alt={toyName} className="toy-avatar" />
            <p>{toyLikes} Likes </p>
            <button className="like-btn">Like {"<3"}</button>
            <button onClick={handleDelete} className="del-btn">
                Burn {toyName} alive!
            </button>
        </div>
    );
}

export default ToyCard;
