import { store } from '@/store/index';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
                    name="cinemas/index"
                    options={{
                        title: 'Cinema',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={28} name="cog" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="moves/index"
                    options={{
                        title: 'Movies',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons
                                name="file-move"
                                size={24}
                                color="black"
                            />
                        ),
                    }}
                />
            </Tabs>
        </Provider>
    );
}
