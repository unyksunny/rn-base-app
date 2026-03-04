import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }} className="p-4">
      <Text className="mb-6 text-4xl font-bold text-blue-500">Home Screen</Text>

      <View className="gap-4">
        <Button title="Theme Page" onPress={() => router.push('/demo')} />

        <Button title="Pokemon Page" onPress={() => router.push('/pokemon')} />
      </View>
    </SafeAreaView>
  );
}
