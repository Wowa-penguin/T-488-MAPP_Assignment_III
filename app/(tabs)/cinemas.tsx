import { Link } from 'expo-router';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import ScreenContainer from '@/components/screenContainer';
import { CINEMAS } from '@/constants/cinemas';

const CinemaListScreen = () => {
    const sortedCinemas = [...CINEMAS].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    return (
        <ScreenContainer>
            <Text style={styles.title}>Cinemas</Text>
            <Text style={styles.subtitle}>
                Select a cinema to see more details.
            </Text>

            <FlatList
                data={sortedCinemas}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => (
                    <Link
                        href={{
                            pathname: '/cinemas/[id]',
                            params: { id: item.id },
                        }}
                        asChild
                    >
                        <TouchableOpacity style={styles.card}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.website}>{item.website}</Text>
                        </TouchableOpacity>
                    </Link>
                )}
            />
        </ScreenContainer>
    );
};

export default CinemaListScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: '#cbd5e1',
        marginBottom: 16,
    },
    list: {
        paddingTop: 8,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#1e293b',
        padding: 16,
        borderRadius: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 4,
    },
    website: {
        fontSize: 14,
        color: '#94a3b8',
    },
});
