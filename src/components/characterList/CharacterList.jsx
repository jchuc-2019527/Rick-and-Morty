import React, { useEffect, useState } from "react";
import Character from "../character/Character";

const NavPage = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>page: {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        page: {props.page}
      </button>
    </header>
  );
};

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function data() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
      console.log(data.results);
    }
    data();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <div>LOADING...</div>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-3" key={character.id}>
                <Character key={character.id} character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
