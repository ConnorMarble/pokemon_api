import axios from "axios";
import { IPokemon, IDetails } from "../interface";

export async function getAllPokemon() {
  const list = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemon: IPokemon[] = list.data.results;
  return pokemon;
}

export async function getPokemon(data: Promise<IPokemon[]>) {
  const list = await data;
  return await axios.all(
    list.map(async (p) => {
      let result = await axios.get(p.url);
      let pokemon: IDetails = result.data;
      return pokemon;
    })
  );
}
