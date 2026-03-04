import { MEDIA, SPLASH_TIME } from '@/constants/constants';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground, View } from 'react-native';

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, SPLASH_TIME);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={MEDIA.SPLASH_IMAGE}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}>
      <View className="flex-1 items-center justify-center">
        <Image source={MEDIA.LOGO} className="h-24 w-56" resizeMode="contain" />
        <ActivityIndicator size="large" color="#ffffff" className="mt-6" />
      </View>
    </ImageBackground>
  );
}
