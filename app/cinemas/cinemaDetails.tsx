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
import React, { useMemo } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';

import { openLink } from '@/utils/openLink';
import { getCinemaMovies } from '@/utils/cinemaMovies';

import MovieCard from '@/components/movieCard';
import Showtime from '@/components/showtime';
>>>>>>> Stashed changes

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
                        { marginBottom: 16, fontSize: 15 },
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
                            <View key={movie.id}>
                                <MovieCard
                                    _id={movie._id}
                                    title={movie.title}
                                    poster={movie.poster}
                                    genres={movie.genres}
                                    certificateIS={movie.certificateIS}
                                    certificateImg={movie.certificateImg}
                                />
<<<<<<< Updated upstream

                                <View style={{ flex: 1 }}>
                                    {/* Title + year */}
                                    <Text
                                        style={[
                                            globalStyles.defaultTextColor,
                                            {
                                                fontSize: 16,
                                                fontWeight: '600',
                                                marginBottom: 4,
                                            },
                                        ]}
                                    >
                                        {movie.title} ({movie.year})
                                    </Text>

                                    {/* Genres */}
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            flexWrap: 'wrap',
                                            gap: 6,
                                            marginBottom: 6,
                                        }}
                                    >
                                        {movie.genres.map((g) => (
                                            <Text
                                                key={g.ID}
                                                style={[
                                                    globalStyles.defaultTextColor,
                                                    { fontSize: 12 },
                                                ]}
                                            >
                                                {g.Name}
                                            </Text>
                                        ))}
                                    </View>

                                    {/* Showtimes */}
                                    {showtime &&
                                        showtime.schedule.length > 0 && (
                                            <View>
                                                <Text
                                                    style={[
                                                        globalStyles.defaultTextColor,
                                                        {
                                                            fontWeight: '600',
                                                            marginBottom: 4,
                                                        },
                                                    ]}
                                                >
                                                    Sýningartímar:
                                                </Text>

                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        flexWrap: 'wrap',
                                                        gap: 8,
                                                    }}
                                                >
                                                    {showtime.schedule.map(
                                                        (sch, idx) => (
                                                            <TouchableOpacity
                                                                key={idx}
                                                                onPress={() =>
                                                                    openLink(
                                                                        sch.purchase_url
                                                                    )
                                                                }
                                                                style={{
                                                                    paddingHorizontal: 8,
                                                                    paddingVertical: 4,
                                                                    borderRadius: 8,
                                                                    borderWidth: 1,
                                                                    borderColor:
                                                                        '#64748b',
                                                                }}
                                                            >
                                                                <Text
                                                                    style={[
                                                                        globalStyles.defaultTextColor,
                                                                        {
                                                                            fontSize: 12,
                                                                        },
                                                                    ]}
                                                                >
                                                                    {sch.time}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        )
                                                    )}
                                                </View>
                                            </View>
                                        )}
                                </View>
                            </TouchableOpacity>
=======
                                {showtime && (
                                    <Showtime
                                        name="Sýningartímar"
                                        schedules={showtime.schedule}
                                    />
                                )}
                            </View>
>>>>>>> Stashed changes
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};

export default CinemaDetails;
