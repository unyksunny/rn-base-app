import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text className="text-4xl font-bold text-blue-500">Home Screen</Text>
      <TouchableOpacity
        className="items-center rounded-xl bg-azure-600 py-3"
        onPress={() => router.push('/demo')}>
        <Text className="font-semibold text-white">Theme Page</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
