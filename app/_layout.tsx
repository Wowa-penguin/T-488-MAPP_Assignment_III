import { store } from '@/store/index';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
export default function RootLayout() {
    return (
        <Provider store={store}>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: '#9af',
                    tabBarInactiveTintColor: 'white',

                    tabBarStyle: Platform.select({
                        default: {
                            backgroundColor: '#347',
                            height: 100,
                        },
                    }),
                    tabBarIconStyle: {
                        margin: 5,
                        height: 30,
                    },

                    headerStyle: {
                        backgroundColor: '#347',
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={32} name="home" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cinemas"
                    options={{
                        title: 'Cinema',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={32} name="cog" color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="movies"
                    options={{
                        title: 'Movies',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="movie"
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="upcoming"
                    options={{
                        title: 'Upcoming',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="watch-later"
                                color={color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="favourites"
                    options={{
                        title: 'Favorites',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="favorite"
                                color={color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </Provider>
    );
}
