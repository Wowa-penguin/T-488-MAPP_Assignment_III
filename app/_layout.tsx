import { store } from '@/store/index';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Provider } from 'react-redux';

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="home" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cinemas"
                    options={{
                        title: 'Cinema',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="cog" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="movies"
                    options={{
                        title: 'Movies',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="at" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="upcoming"
                    options={{
                        title: 'Upcoming movies',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="at" color={color} />
                        ),
                    }}
                />
            </Tabs>
        </Provider>
    );
}
