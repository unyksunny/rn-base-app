import { Stack, router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function PokemonNotFound() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />

      <View className="flex-1 items-center justify-center gap-4 p-6">
        <Text className="text-2xl font-bold">Pokémon Not Found</Text>

        <Text className="text-center text-gray-500">The requested Pokémon does not exist.</Text>

        <Pressable
          onPress={() => router.replace('/home')}
          className="rounded-lg bg-black px-6 py-3">
          <Text className="font-semibold text-white">Go Home</Text>
        </Pressable>
      </View>
    </>
  );
}
