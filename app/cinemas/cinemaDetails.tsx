<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import {
    Image,
    Linking,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSelector } from 'react-redux';
=======
=======
>>>>>>> Stashed changes
import React, { useMemo } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
<<<<<<< Updated upstream
import React, { useMemo } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
=======
>>>>>>> Stashed changes
import globalStyles from '@/styles/globalStyles';

import { openLink } from '@/utils/openLink';
import { getCinemaMovies } from '@/utils/cinemaMovies';

import MovieCard from '@/components/movieCard';
import Showtime from '@/components/showtime';

const CinemaDetails = () => {
    const { cinemaId } = useLocalSearchParams<{ cinemaId?: string }>();
    const id = cinemaId ? Number(cinemaId) : NaN;

    const theaters = useSelector((state: RootState) => state.theater.items);
    const theater = theaters.find((t) => t.id === id);

    const movies = useSelector((state: RootState) => state.movies.items);

    const cinemaMovies = useMemo(
        () => getCinemaMovies(movies, id),
        [movies, id]
    );
<<<<<<< Updated upstream
    const cinemaMovies = useMemo(
        () => getCinemaMovies(movies, id),
        [movies, id]
    );
=======
>>>>>>> Stashed changes

    if (!theater) {
        return (
            <View
                style={[
                    { flex: 1, justifyContent: 'center', padding: 16 },
                    globalStyles.defaultBackgroundColor,
                ]}
            >
                <Text style={globalStyles.defaultTextColor}>
                    Bíó fannst ekki.
                </Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        >
            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
                ]}
            >
                {theater.name}
            </Text>

            {theater.website && (
<<<<<<< Updated upstream
            {theater.website && (
=======
>>>>>>> Stashed changes
                <TouchableOpacity onPress={() => openLink(theater.website)}>
                    <Text
                        style={{
                            color: '#93c5fd',
                            textDecorationLine: 'underline',
                            marginBottom: 12,
                        }}
                    >
                        {theater.website}
                    </Text>
                </TouchableOpacity>
            )}
<<<<<<< Updated upstream
            )}

            {theater.description && (
            {theater.description && (
=======

            {theater.description && (
>>>>>>> Stashed changes
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { marginBottom: 16, fontSize: 15 },
                    ]}
                >
                    {theater.description}
                </Text>
            )}
<<<<<<< Updated upstream
            )}
=======
>>>>>>> Stashed changes

            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { marginBottom: 4, fontWeight: '600' },
                ]}
            >
                Heimilisfang:
            </Text>
            <Text style={[globalStyles.defaultTextColor, { marginBottom: 12 }]}>
                {theater.address}, {theater.city}
            </Text>

            {theater.phone && (
<<<<<<< Updated upstream
            {theater.phone && (
=======
>>>>>>> Stashed changes
                <>
                    <Text
                        style={[
                            globalStyles.defaultTextColor,
                            { marginBottom: 4, fontWeight: '600' },
                        ]}
                    >
                        Sími:
                    </Text>
                    <TouchableOpacity
                        onPress={() => openLink(`tel:${theater.phone}`)}
                    >
                        <Text
                            style={[
                                globalStyles.defaultTextColor,
                                { marginBottom: 12, color: '#93c5fd' },
                            ]}
                        >
                            {theater.phone}
                        </Text>
                    </TouchableOpacity>
                </>
            )}
<<<<<<< Updated upstream
            )}

            {theater.google_map && (
            {theater.google_map && (
=======

            {theater.google_map && (
>>>>>>> Stashed changes
                <TouchableOpacity onPress={() => openLink(theater.google_map)}>
                    <Text
                        style={{
                            color: '#93c5fd',
                            textDecorationLine: 'underline',
                            marginBottom: 20,
                        }}
                    >
                        Opna í Google Maps
                    </Text>
                </TouchableOpacity>
            )}
<<<<<<< Updated upstream
            )}
=======
>>>>>>> Stashed changes

            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { fontSize: 20, fontWeight: '600', marginBottom: 12 },
                ]}
            >
                Myndir í sýningu:
            </Text>

            {cinemaMovies.length === 0 ? (
                <Text style={globalStyles.defaultTextColor}>
                    Engar myndir fundust fyrir þetta bíó.
                </Text>
            ) : (
                <View style={{ gap: 20 }}>
<<<<<<< Updated upstream
                <View style={{ gap: 20 }}>
                    {cinemaMovies.map((movie) => {
                        const showtime = movie.showtimes.find(
                            (s: any) => s.cinema.id === id
                            (s: any) => s.cinema.id === id
=======
                    {cinemaMovies.map((movie) => {
                        const showtime = movie.showtimes.find(
                            (s: any) => s.cinema.id === id
>>>>>>> Stashed changes
                        );

                        return (
                            <View key={movie.id}>
                                <MovieCard
                                    _id={movie._id}
                                    title={movie.title}
                                    poster={movie.poster}
                                    genres={movie.genres}
                                    certificateIS={movie.certificateIS}
                                    certificateImg={movie.certificateImg}
                                />
                                {showtime && (
                                    <Showtime
                                        name="Sýningartímar"
                                        schedules={showtime.schedule}
                                    />
                                )}
                            </View>
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};

export default CinemaDetails;
