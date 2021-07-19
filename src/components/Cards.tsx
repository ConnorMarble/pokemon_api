import { useEffect, useState } from "react";
import Card from "./Card";
import { IDetails } from "../interface";
import { getPokemon, getAllPokemon } from "../services";

const Cards = () => {
  const [pokemon, setPokemon] = useState<IDetails[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setPokemon(await getPokemon(getAllPokemon()));
      } catch (error) {
        setError("There was an error loading Pokemon.");
      }
    })();
  }, []);

  return (
    <>
      {error && <p className="error">{error}</p>}
      <section className="cards">
        {pokemon.map((p) => (
          <Card key={p.id} {...p}></Card>
        ))}
      </section>
    </>
  );
};

export default Cards;
