import { Stack } from 'expo-router';
import '../global.css';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="demo" options={{ title: 'Demo' }} />
      <Stack.Screen name="pokemon" options={{ title: 'Pokemon' }} />
      <Stack.Screen name="pokemon/[name]" options={{ title: 'Pokemon Detail' }} />
    </Stack>
  );
}
