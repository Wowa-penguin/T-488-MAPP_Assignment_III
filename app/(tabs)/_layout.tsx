import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
export default function TabLayout() {
    return (
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
                name="Cinema"
                options={{
                    title: 'Cinema',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="cog" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="moves"
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
    );
}
