import { RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getCinemaMovies } from '@/utils/cinemaMovies';
import { openLink } from '@/utils/openLink';

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
                <TouchableOpacity onPress={() => openLink(theater.website)}>
                    <Text
                        style={{
                            color: '#93c5fd',
                            textDecorationLine: 'underline',
                            marginBottom: 12,
                            fontSize: 20,
                        }}
                    >
                        {theater.website}
                    </Text>
                </TouchableOpacity>
            )}

            {theater.description && (
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { marginBottom: 16, fontSize: 18, fontweight: '500' },
                    ]}
                >
                    {theater.description}
                </Text>
            )}

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
                <>
                    <Text
                        style={[
                            globalStyles.defaultTextColor,
                            {
                                marginBottom: 4,
                                fontWeight: '600',
                                fontSize: 20,
                            },
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
                                {
                                    marginBottom: 12,
                                    color: '#93c5fd',
                                    fontSize: 20,
                                },
                            ]}
                        >
                            {theater.phone}
                        </Text>
                    </TouchableOpacity>
                </>
            )}

            {theater.google_map && (
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
                    {cinemaMovies.map((movie) => {
                        const showtime = movie.showtimes.find(
                            (s: any) => s.cinema.id === id
                        );

                        return (
                            <>
                                <MovieCard
                                    key={movie._id}
                                    _id={movie._id}
                                    title={movie.title}
                                    poster={movie.poster}
                                    year={movie.year}
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
                            </>
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};

export default CinemaDetails;
