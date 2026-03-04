import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Variant = 'primary' | 'outline' | 'text';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: Variant;
}

export default function Button({ title, variant = 'primary', ...props }: ButtonProps) {
  const base = 'items-center rounded-xl py-3';

  const variants = {
    primary: 'bg-azure-600',
    outline: 'border border-azure-600',
    text: '',
  };

  const textVariants = {
    primary: 'text-white font-semibold',
    outline: 'text-azure-600 font-semibold',
    text: 'text-azure-600 font-medium',
  };

  return (
    <TouchableOpacity className={`${base} ${variants[variant]}`} {...props}>
      <Text className={textVariants[variant]}>{title}</Text>
    </TouchableOpacity>
  );
}
