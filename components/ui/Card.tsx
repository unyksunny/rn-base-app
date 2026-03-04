import { Pressable, PressableProps, View } from 'react-native';
import { ReactNode } from 'react';

type CardProps = PressableProps & {
  children: ReactNode;
  backgroundColor?: string;
};

export default function Card({ children, backgroundColor, ...props }: CardProps) {
  return (
    <Pressable {...props}>
      <View style={{ backgroundColor }} className="rounded-2xl border border-borderSoft p-4">
        {children}
      </View>
    </Pressable>
  );
}
