import Pagination from "./Pagination";
import { useEffect, useState } from "react";
import Card from "./Card";
import { IDetails } from "../interface";
import { getPokemon, getAllPokemon } from "../services";

const Main = () => {
  const [pokemon, setPokemon] = useState<IDetails[]>([]);
  const [offset, setOffset] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    (async () => {
      try {
        setPokemon(
          await getPokemon(getAllPokemon("https://pokeapi.co/api/v2/pokemon"))
        );
        setLoading(false);
      } catch (error) {
        setError("There was an error loading Pokemon.");
      }
    })();
  }, []);

  async function next(e: React.MouseEvent) {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      setPokemon(
        await getPokemon(getAllPokemon(`${apiUrl}?offset=${offset}&limit=20`))
      );
      setLoading(false);
      setOffset(offset + 20);
    } catch (error) {
      console.log(error);
    }
  }

  async function previous(e: React.MouseEvent) {
    e.preventDefault();
    if (offset === 20 || loading) return;
    try {
      setLoading(true);
      setPokemon(
        await getPokemon(
          getAllPokemon(`${apiUrl}?offset=${offset - 40}&limit=20`)
        )
      );
      setLoading(false);
      setOffset(offset - 20);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="main">
      <Pagination next={next} previous={previous}></Pagination>
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <section className="cards">
          {pokemon.map((p) => (
            <Card key={p.id} {...p}></Card>
          ))}
        </section>
      )}
    </section>
  );
};

export default Main;
