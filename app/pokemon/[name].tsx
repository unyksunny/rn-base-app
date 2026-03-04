import { POKE_API } from '@/constants/constants';
import { usePokemonStore } from '@/store/pokemonStore';
import { Pokemon } from '@/types/Pokemon';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';

import Card from '@/components/ui/Card';
import Pill from '@/components/ui/Pill';

export default function PokemonDetail() {
  const { name } = useLocalSearchParams<{ name: string }>();

  const pokemonFromStore = usePokemonStore((s) => (name ? s.pokemonDetails[name] : null));
  const setPokemonDetail = usePokemonStore((s) => s.setPokemonDetail);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) {
      router.replace('/pokemon/not-found');
      return;
    }

    if (pokemonFromStore) {
      setPokemon(pokemonFromStore);
      setLoading(false);
      return;
    }

    fetchPokemon();
  }, [name]);

  async function fetchPokemon() {
    try {
      const res = await fetch(`${POKE_API.URL}/${name}`);

      if (!res.ok) {
        router.replace('/pokemon/not-found');
        return;
      }

      const data = await res.json();

      setPokemon(data);
      setPokemonDetail(name!, data);
    } catch {
      router.replace('/pokemon/not-found');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!pokemon) return null;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Card>
        <Image
          source={{
            uri:
              pokemon.sprites.other?.['official-artwork']?.front_default ??
              pokemon.sprites.front_default,
          }}
          style={{ width: 220, height: 220, alignSelf: 'center' }}
          resizeMode="contain"
        />

        <Text className="text-center text-3xl font-bold text-gray-500">#{pokemon.id}</Text>

        <Text className="mt-2 text-center text-3xl font-bold capitalize">{pokemon.name}</Text>

        <Text className="mb-3 text-xl font-semibold">Types</Text>
        <View className="mb-4 flex-row gap-2">
          {pokemon.types.map((t) => (
            <Pill key={t.type.name} label={t.type.name} />
          ))}
        </View>

        <Text className="mb-1 text-xl font-semibold ">Abilities</Text>
        <View className="flex flex-row flex-wrap gap-4">
          {pokemon.abilities.map((a) => (
            <Text key={a.ability.name} className="mb-2 capitalize">
              {a.ability.name}
            </Text>
          ))}
        </View>
        <View className="mt-4 flex flex-row gap-4">
          <View className="flex flex-1 gap-2">
            <Text className="mb-3 text-xl font-semibold">Info</Text>
            <Text>Height: {pokemon.height}</Text>
            <Text>Weight: {pokemon.weight}</Text>
            <Text>Base Experience: {pokemon.base_experience}</Text>
          </View>
          <View className="flex flex-1 gap-2">
            <Text className="mb-3 text-xl font-semibold">Stats</Text>
            {pokemon.stats.map((s) => (
              <Text key={s.stat.name} className="capitalize">
                {s.stat.name}: {s.base_stat}
              </Text>
            ))}
          </View>
        </View>
      </Card>
    </ScrollView>
  );
}
