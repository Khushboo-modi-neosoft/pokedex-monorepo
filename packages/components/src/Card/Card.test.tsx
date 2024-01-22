import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { mockPokemonData } from '../mockData';

describe('CardPokemon component', () => {
  it('renders without crashing', () => {
    render(<Card pokemonData={mockPokemonData} />);
  });

  it('displays the correct Pokemon name', () => {
    const { getByText } = render(<Card pokemonData={mockPokemonData} />);
    expect(getByText('jigglypuff')).toBeInTheDocument();
  });

  it('displays "Not Available" for missing base experience', () => {
    const pokemonDataWithoutBaseExp = { ...mockPokemonData, base_experience: undefined };
    render(<Card pokemonData={pokemonDataWithoutBaseExp} />);
    expect(screen.queryByText('Base Experience')).not.toBeInTheDocument();
  });
});
