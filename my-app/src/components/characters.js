import React from "react";

const Characters = ({ characters }) => {
  return (
    <div class="row">
      <center>
        <h1>Characters List</h1>
      </center>
      <div class="row">
        {characters.map(character => (
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{character.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {character.species}
                </h6>
                <img class="img-fluid" src={character.image} alt="none" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
