import { BlurView } from 'expo-blur';
import { Pressable, PressableProps, View } from 'react-native';
import { ReactNode } from 'react';

type CardGlassProps = PressableProps & {
  children: ReactNode;
};

export default function CardGlass({ children, style, className, ...props }: CardGlassProps) {
  return (
    <Pressable {...props} style={style} className={className}>
      <View className="flex-1 overflow-hidden rounded-2xl border border-white/30">
        <BlurView intensity={40} tint="light" style={{ flex: 1 }}>
          {children}
        </BlurView>
      </View>
    </Pressable>
  );
}
