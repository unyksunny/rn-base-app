import { Pokemon } from '@/types/Pokemon';
import { create } from 'zustand';

type PokemonStore = {
  pokemons: Pokemon[];
  offset: number;
  hasMore: boolean;
  pokemonDetails: Record<string, Pokemon>;

  appendPokemons: (data: Pokemon[]) => void;
  incrementOffset: () => void;
  setHasMore: (value: boolean) => void;
  setPokemonDetail: (name: string, data: Pokemon) => void;
};

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  offset: 0,
  hasMore: true,
  pokemonDetails: {},

  appendPokemons: (data) =>
    set((state) => ({
      pokemons: [...state.pokemons, ...data],
    })),

  incrementOffset: () =>
    set((state) => ({
      offset: state.offset + 10,
    })),

  setHasMore: (value) => set({ hasMore: value }),

  setPokemonDetail: (name, data) =>
    set((state) => ({
      pokemonDetails: {
        ...state.pokemonDetails,
        [name]: data,
      },
    })),
}));
