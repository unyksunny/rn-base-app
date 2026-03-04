import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Demo() {
  return (
    <SafeAreaView>
      <ScrollView className="flex-1 bg-neutralBg px-6 pt-14">
        {/* Title */}
        <Text className="mb-8 text-3xl font-semibold text-slate-900">Azure Theme Preview</Text>

        {/* Buttons */}
        <Text className="mb-4 text-lg font-medium text-slate-600">Buttons</Text>

        <View className="mb-10 space-y-4">
          <TouchableOpacity className="items-center rounded-xl bg-azure-600 py-3">
            <Text className="font-semibold text-white">Primary Button</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center rounded-xl border border-azure-600 py-3">
            <Text className="font-semibold text-azure-600">Outline Button</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center rounded-xl py-3">
            <Text className="font-medium text-azure-600">Text Button</Text>
          </TouchableOpacity>
        </View>

        {/* Card */}
        <Text className="mb-4 text-lg font-medium text-slate-600">Card</Text>

        <View className="mb-10 rounded-2xl border border-borderSoft bg-surface p-6 shadow-sm">
          <Text className="mb-2 text-xl font-semibold text-slate-900">Clean Surface Card</Text>
          <Text className="text-slate-600">Subtle elevation, soft borders, Azure accent.</Text>
        </View>

        {/* Badges */}
        <Text className="mb-4 text-lg font-medium text-slate-600">Badges</Text>

        <View className="mb-12 flex-row space-x-3">
          <View className="rounded-full bg-azure-100 px-3 py-1">
            <Text className="font-medium text-azure-700">Azure</Text>
          </View>

          <View className="rounded-full bg-slate-100 px-3 py-1">
            <Text className="font-medium text-slate-700">Neutral</Text>
          </View>

          <View className="rounded-full bg-azure-600 px-3 py-1">
            <Text className="font-medium text-white">Active</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
