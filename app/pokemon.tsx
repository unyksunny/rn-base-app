import { PokemonCard } from '@/components/PokemonCard';
import { POKE_API } from '@/constants/constants';
import { usePokemonStore } from '@/store/pokemonStore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

export default function Pokemon() {
  const { pokemons, offset, hasMore, appendPokemons, incrementOffset, setHasMore } =
    usePokemonStore();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchPokemons();
    }
  }, []);

  async function fetchPokemons() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const response = await fetch(
        `${POKE_API.URL}?limit=${POKE_API.DEFAULT_LIMIT}&offset=${offset}`
      );
      const data = await response.json();

      if (data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();

          return {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            sprites: details.sprites,
            types: details.types,
          };
        })
      );

      appendPokemons(detailedPokemons);
      incrementOffset();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ gap: 24 }}
      contentContainerStyle={{ gap: 24, padding: 16 }}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <PokemonCard data={item} />
        </View>
      )}
      onEndReached={() => {
        if (!loading && hasMore) fetchPokemons();
      }}
      onEndReachedThreshold={0.2}
      ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
    />
  );
}
