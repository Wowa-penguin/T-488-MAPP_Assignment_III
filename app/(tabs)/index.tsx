import { AppDispatch, RootState } from '@/store';
import { fetchMovies } from '@/store/moviesSlice';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
    const dispatch = useDispatch<AppDispatch>();
    const {
        items: movies,
        status,
        error,
    } = useSelector((state: RootState) => state.movies);
    const cinemas = useSelector((state: RootState) => state.cinemas.cinemas);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMovies());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return (
            <View>
                <ActivityIndicator />
                <Text>Loading movies…</Text>
            </View>
        );
    }

    if (status === 'failed') {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    console.log(cinemas);
    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => String(item._id)}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    );

    // return (
    //     <ScreenContainer>
    //         <View style={styles.header}>
    //             <Text style={styles.title}>Dr. Cinema</Text>
    //             <Text style={styles.subtitle}>
    //                 Find cinemas, movies and show times
    //             </Text>
    //         </View>

    //         {/* <Button title="Test " onPress={getData} /> */}

    //         <View style={styles.buttons}>
    //             <Link href="/cinemas" asChild>
    //                 <TouchableOpacity style={styles.card}>
    //                     <Text style={styles.cardTitle}>Cinemas</Text>
    //                     <Text style={styles.cardText}>
    //                         See all cinemas and their details.
    //                     </Text>
    //                 </TouchableOpacity>
    //             </Link>

    //             <Link href="/movies" asChild>
    //                 <TouchableOpacity style={styles.card}>
    //                     <Text style={styles.cardTitle}>Movies</Text>
    //                     <Text style={styles.cardText}>
    //                         Browse movies currently playing.
    //                     </Text>
    //                 </TouchableOpacity>
    //             </Link>

    //             <Link href="/upcoming" asChild>
    //                 <TouchableOpacity style={styles.card}>
    //                     <Text style={styles.cardTitle}>Upcoming</Text>
    //                     <Text style={styles.cardText}>
    //                         Check upcoming releases.
    //                     </Text>
    //                 </TouchableOpacity>
    //             </Link>
    //         </View>
    //     </ScreenContainer>
    // );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: 'white',
    },
    subtitle: {
        marginTop: 8,
        fontSize: 16,
        color: '#cbd5e1',
    },
    buttons: {
        gap: 16,
    },
    card: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#1e293b',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginBottom: 4,
    },
    cardText: {
        fontSize: 14,
        color: '#cbd5e1',
    },
});
