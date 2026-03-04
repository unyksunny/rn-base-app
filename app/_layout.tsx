import { Stack } from 'expo-router';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      <Stack.Screen name="demo" options={{ title: 'Demo', headerShown: true }} />
    </Stack>
  );
}
