import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
        <Stack.Screen name="demo" options={{ title: 'Demo', headerShown: true }} />
      </Stack>
    </SafeAreaProvider>
  );
}
