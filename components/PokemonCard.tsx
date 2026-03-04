import { colorsByType, Pokemon, withOpacity } from '@/types/Pokemon';
import { router } from 'expo-router';
import { Image, Text, View } from 'react-native';
import CardGlass from './ui/CardGlass';

type PokemonCardProps = {
  data: Pokemon;
};

export const PokemonCard = ({ data }: PokemonCardProps) => {
  const type = data.types[0].type.name;
  const typeColor = colorsByType[type] ?? '#ccc';
  const tint = withOpacity(typeColor, 0.18);

  const image =
    data.sprites.other?.['official-artwork']?.front_default ?? data.sprites.front_default;

  return (
    <CardGlass
      onPress={() => router.push(`/pokemon/${data.name}`)}
      style={{ flex: 1, height: 260 }}>
      <View className="relative flex-1 items-center justify-between p-4">
        {/* full background tint */}
        <View
          pointerEvents="none"
          style={{ backgroundColor: tint }}
          className="absolute inset-0 rounded-2xl"
        />

        {/* image */}
        <Image source={{ uri: image }} style={{ width: 170, height: 170 }} resizeMode="contain" />

        {/* text */}
        <View className="items-center">
          <Text className="text-lg font-bold capitalize text-slate-900">{data.name}</Text>

          <View
            style={{ backgroundColor: withOpacity(typeColor, 0.25) }}
            className="mt-2 rounded-full px-3 py-1">
            <Text style={{ color: typeColor }} className="text-xs font-semibold capitalize">
              {type}
            </Text>
          </View>
        </View>
      </View>
    </CardGlass>
  );
};
