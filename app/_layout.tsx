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
                            backgroundColor: '#124',
                            height: 100,
                        },
                    }),
                    tabBarIconStyle: {
                        margin: 5,
                        height: 30,
                        marginHorizontal: -10,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: '600',
                    },
                    headerStyle: {
                        backgroundColor: '#124',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 22,
                    },
                    headerTintColor: '#fff',
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={32} name="home" color={color} />
                        ),
                        tabBarActiveTintColor: '#faf',
                    }}
                />
                <Tabs.Screen
                    name="cinemas"
                    options={{
                        title: 'Cinema',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome size={32} name="cog" color={color} />
                        ),
                        tabBarActiveTintColor: '#fba',
                    }}
                />
                <Tabs.Screen
                    name="movies"
                    options={{
                        href: null,
                        title: 'Movies',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="movie"
                                color={color}
                            />
                        ),
                        tabBarActiveTintColor: '#ffa',
                    }}
                />
                <Tabs.Screen
                    name="upcoming"
                    options={{
                        title: 'Upcoming',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="watch-later"
                                color={color}
                            />
                        ),
                        tabBarActiveTintColor: '#aaf',
                    }}
                />
                <Tabs.Screen
                    name="favourites"
                    options={{
                        title: 'Favorites',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons
                                size={32}
                                name="favorite"
                                color={color}
                            />
                        ),
                        tabBarActiveTintColor: '#faa',
                    }}
                />
            </Tabs>
        </Provider>
    );
}
