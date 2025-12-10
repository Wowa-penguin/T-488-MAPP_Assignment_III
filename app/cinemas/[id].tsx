import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { 
    ScrollView, 
    Text, 
    View, 
    TouchableOpacity, 
    Linking,
    Image,
} from 'react-native';
import globalStyles from '@/styles/globalStyles';
import React, { useMemo } from 'react';

const CinemaDetails = () => {
    //get the cinema id from route
    const { id } = useLocalSearchParams<{ id?: string }>();
    const cinemaId = id ? Number(id) : NaN;
    const router = useRouter();

    // get cinema from redux
    const cinema = useSelector((state: RootState) =>
        state.cinemas.cinemas.find((c) => c.id === cinemaId)
    );

    const movies = useSelector((state: RootState) => state.movies.items);

    //all movies that have showtimes in this cinema
    const cinemaMovies = useMemo(() => {
        const filtered = movies.filter((movie) =>
                movie.showtimes.some((s) => s.cinema.id === cinemaId)
        );

        //deduplicate by movie.id
        const map = new Map<number, (typeof filtered)[number]>();
        
        filtered.forEach((movie) => {
            if (!map.has(movie.id)) {
                map.set(movie.id, movie);
            }
        });

        return Array.from(map.values());
    }, [movies, cinemaId]);

    //loading or missing cinema
    if (!cinema) {
        return (
            <View 
                style={[
                    { flex: 1, justifyContent: 'center', padding: 16 },
                    globalStyles.defaultBackgroundColor,
                ]}
            >
                <Text style = {globalStyles.defaultTextColor}>
                    Bíó fannst ekki.
                </Text>
            </View>
        );
    }

    //render basic cinema info
    const handleWebsitePress = () => {
        if (cinema.website) {
            Linking.openURL(cinema.website);
        }
    };

    return (
        <ScrollView
            style={[{ flex: 1}, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ padding: 16, paddingBottom: 40 }}
        >
            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { fontSize: 24, fontWeight: 'bold', marginBottom: 12},
                ]}
            >
                {cinema.name}
            </Text>

            {cinema.website && (
                <TouchableOpacity onPress={handleWebsitePress}>
                    <Text
                        style={{
                            color: '#93c5fd',
                            textDecorationLine: 'underline',
                            marginBottom: 12,
                        }}
                    >
                        {cinema.website}
                    </Text>
                </TouchableOpacity>
            )}

            <Text style={[globalStyles.defaultTextColor, { marginBottom: 8 }]}>
                Upplýsingar um þetta bíó munu birtast hér.
            </Text>

            {/* 🎬 Associated movies */}
<Text
    style={[
        globalStyles.defaultTextColor,
        { fontSize: 18, fontWeight: '600', marginBottom: 8 },
    ]}
>
    Myndir í sýningu:
</Text>

{cinemaMovies.length === 0 ? (
    <Text style={globalStyles.defaultTextColor}>
        Engar myndir fundust fyrir þetta bíó.
    </Text>
) : (
    <View style={{ gap: 12 }}>
        {cinemaMovies.map((movie) => {
            // Find showtimes for THIS cinema
            const showtime = movie.showtimes.find(
                (s) => s.cinema.id === cinemaId
            );

            return (
                <TouchableOpacity
                    key={movie.id}
                    onPress={() =>
                        router.push({
                            pathname: '/movies/movieDetails',
                            params: { movieId: movie._id },
                        })
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
                        style={{ width: 70, height: 100, borderRadius: 8 }}
                    />

                    <View style={{ flex: 1 }}>
                        {/* Title + year */}
                        <Text
                            style={[
                                globalStyles.defaultTextColor,
                                { fontSize: 16, fontWeight: '600' },
                            ]}
                        >
                            {movie.title} ({movie.year})
                        </Text>

                        {/* Genres */}
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginTop: 4,
                                gap: 4,
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

                        {/* Showtimes for this cinema */}
                        {showtime && showtime.schedule.length > 0 && (
                            <View style={{ marginTop: 8 }}>
                                <Text
                                    style={[
                                        globalStyles.defaultTextColor,
                                        { fontWeight: '600' },
                                    ]}
                                >
                                    Sýningatímar:
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        gap: 8,
                                        marginTop: 4,
                                    }}
                                >
                                    {showtime.schedule.map((sch, idx) => (
                                        <TouchableOpacity
                                            key={idx}
                                            onPress={() =>
                                                sch.purchase_url &&
                                                Linking.openURL(
                                                    sch.purchase_url
                                                )
                                            }
                                            style={{
                                                paddingHorizontal: 8,
                                                paddingVertical: 4,
                                                borderRadius: 8,
                                                borderWidth: 1,
                                                borderColor: '#64748b',
                                            }}
                                        >
                                            <Text
                                                style={[
                                                    globalStyles.defaultTextColor,
                                                    { fontSize: 12 },
                                                ]}
                                            >
                                                {sch.time}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
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
