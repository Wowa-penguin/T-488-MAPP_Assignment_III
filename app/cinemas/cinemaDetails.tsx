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

const CinemaDetails = () => {
    const { cinemaId } = useLocalSearchParams<{ cinemaId?: string }>();
    const id = cinemaId ? Number(cinemaId) : NaN;

    const router = useRouter();

    // Get theater info
    const theaters = useSelector((state: RootState) => state.theater.items);
    const theater = theaters.find((t) => t.id === id);

    // Get all movies
    const movies = useSelector((state: RootState) => state.movies.items);

    // Movies that have showtimes at this theater
    const cinemaMovies = useMemo(() => {
        const filtered = movies.filter((movie) =>
            movie.showtimes.some((s) => s.cinema.id === id)
        );

        // Deduplicate by movie.id
        const map = new Map<number, (typeof filtered)[number]>();
        filtered.forEach((movie) => {
            if (!map.has(movie.id)) {
                map.set(movie.id, movie);
            }
        });

        return Array.from(map.values());
    }, [movies, id]);

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

    const openLink = (url?: string) => {
        if (url) Linking.openURL(url);
    };

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        >
            {/* Theater name */}
            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
                ]}
            >
                {theater.name}
            </Text>

            {/* Website */}
            {theater.website ? (
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
            ) : null}

            {/* Description */}
            {theater.description ? (
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { marginBottom: 16, fontSize: 15 },
                    ]}
                >
                    {theater.description}
                </Text>
            ) : null}

            {/* Address */}
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

            {/* Phone */}
            {theater.phone ? (
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
            ) : null}

            {/* Google Maps */}
            {theater.google_map ? (
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
            ) : null}

            {/* Movies showing here */}
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
                <View style={{ gap: 14 }}>
                    {cinemaMovies.map((movie) => {
                        const showtime = movie.showtimes.find(
                            (s) => s.cinema.id === id
                        );

                        return (
                            <TouchableOpacity
                                key={movie.id}
                                onPress={() =>
                                    router.push(
                                        `/movies/movieDetails?movieId=${movie._id}` as never
                                    )
                                }
                                style={{
                                    backgroundColor: '#1e293b',
                                    borderRadius: 12,
                                    padding: 12,
                                    flexDirection: 'row',
                                    gap: 12,
                                }}
                            >
                                {/* Poster */}
                                <Image
                                    source={{ uri: movie.poster }}
                                    style={{
                                        width: 70,
                                        height: 100,
                                        borderRadius: 8,
                                    }}
                                />

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
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};

export default CinemaDetails;
