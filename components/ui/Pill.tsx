import { Text, View } from 'react-native';

interface PillProps {
  label: string;
  variant?: 'azure' | 'neutral' | 'active';
}

export default function Pill({ label, variant = 'azure' }: PillProps) {
  const styles = {
    azure: 'bg-azure-100 text-azure-700',
    neutral: 'bg-slate-100 text-slate-700',
    active: 'bg-azure-600 text-white',
  };

  const [bg, text] = styles[variant].split(' ');

  return (
    <View className={`rounded-full px-3 py-1 ${bg}`}>
      <Text className={`font-medium ${text} capitalize`}>{label}</Text>
    </View>
  );
}
