import React from "react";
import Card from "./Card";
import { mockPokemonData } from "../mockData";

export default {
  component: <Card pokemonData={mockPokemonData} />,
  title: "PokemonCard",
};

export const Default = {
  render: () => (
    <Card pokemonData={mockPokemonData} />
  )
};
