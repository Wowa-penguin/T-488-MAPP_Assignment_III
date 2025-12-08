import { store } from '@/store/index';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';

export default function RootLayout() {
    return (

            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>

    );
}
