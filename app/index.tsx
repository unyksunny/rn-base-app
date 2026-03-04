import { router } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text className="text-4xl font-bold text-blue-500">Home Screen</Text>
      <TouchableOpacity
        className="items-center rounded-xl bg-azure-600 py-3"
        onPress={() => router.push('/demo')}>
        <Text className="font-semibold text-white">Theme Page</Text>
      </TouchableOpacity>
    </View>
  );
}
