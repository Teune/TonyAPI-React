import React from 'react'

const Characters = ({ characters }) => {
    return (
      <div>
        <center><h1>Characters List</h1></center>
        {characters.map((character) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{character.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{character.species}</h6>
              <img src={character.image} alt='none' />
            </div>
          </div>
        ))}
      </div>
    )
  };

  export default Characters