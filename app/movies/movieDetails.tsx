import ActorsAndDirectors from '@/components/actorsAndDirectors';
import Button from '@/components/button';
import Genres from '@/components/genres';
import MovieInfoPosterAndPlot from '@/components/movieInfoPosterAndPlot';
import Ratings from '@/components/ratings';
import Showtime from '@/components/showtime';
import { Movie } from '@/models/movies';
import { RootState } from '@/store';
import { toggleFavorite } from '@/store/favoritesSlice';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import moviesStyles from '@/styles/movies';
import { checkNames } from '@/utils/checkAndHandelNames';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Text, View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addReview } from '@/store/reviewsSlice';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const params = useLocalSearchParams<{
        movieId: string;
    }>();
    const movieId = params.movieId as string;
    const favoriteIds = useSelector(
        (state: RootState) => state.favorites.movieIds
    );

    const movies = useSelector((state: RootState) => state.movies.items);
    const upcomingMovies = useSelector(
        (state: RootState) => state.upcoming.items
    );

    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const reviews = useSelector(
        (state: RootState) => state.reviews.byMovieId[movieId] ?? []
    );

    const allMovies = [...movies, ...upcomingMovies];

    const movieInfo: Movie | undefined = allMovies.find(
        (movie) => movie._id === movieId
    );

    if (!movieInfo) {
        // if _id is missing or movie not found
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }
    const isFavorite = favoriteIds.includes(movieInfo._id);

    const names = checkNames({
        actors: movieInfo.actors_abridged,
        directors: movieInfo.directors_abridged,
        omdb: movieInfo.omdb[0],
    });

    const handleSubmitReview = () => {
        if (!reviewText.trim() || rating === 0) return;

        dispatch(
            addReview({
                movieId: movieInfo._id,
                text: reviewText.trim(),
                rating,
            })
        );

        setReviewText('');
        setRating(0);
    };

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                <MovieInfoPosterAndPlot
                    poster={movieInfo.poster}
                    title={movieInfo.title}
                    plot={movieInfo.plot}
                />

                <View style={styles.certificateAndDuration}>
                    <View style={moviesStyles.certificateRow}>
                        <Text style={globalStyles.defaultTextColor}>
                            {movieInfo.certificateIS}
                        </Text>
                        <Image
                            style={moviesStyles.certificateIcon}
                            source={{ uri: movieInfo.certificateImg }}
                        />
                    </View>

                    <Text style={globalStyles.defaultTextColor}>
                        {movieInfo.year}
                    </Text>
                    <Text style={globalStyles.defaultTextColor}>
                        Duration {movieInfo.durationMinutes} minutes long
                    </Text>
                </View>

                <Button
                    style={[globalStyles.defaultButton, styles.favoriteButton]}
                    onPress={() => dispatch(toggleFavorite(movieInfo._id))}
                >
                    <Text style={globalStyles.defaultTextColor}>
                        {isFavorite ? '❤️' : '🤍'}
                    </Text>
                </Button>

                <View style={styles.sectionContainer}>
                    <View style={styles.titleOfSectionContainer}>
                        <Text style={styles.titleOfSection}>Genres</Text>
                    </View>

                    <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
                        <Text
                            style={[
                                globalStyles.defaultTextColor,
                                { marginBottom: 4 },
                            ]}
                        >
                            Þín einkunn
                        </Text>

                        <View style={{ flexDirection: 'row', marginBottom: 8, backgroundColor: 'skyblue', borderRadius: 8, }}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Text
                                    key={star}
                                    onPress={() => setRating(star)}
                                    style={{
                                        fontSize: 28,
                                        marginRight: 4,
                                    }}
                                >
                                    {star <= rating ? '⭐️' : '☆'}
                                </Text>
                            ))}
                        </View>

                        <View style={{ marginTop: 24, paddingHorizontal: 16 }}>
                            <Text
                                style={[
                                    globalStyles.defaultTextColor,
                                    {
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        marginBottom: 8,
                                    },
                                ]}
                            >
                                Umsagnir
                            </Text>

                            {reviews.length === 0 ? (
                                <Text style={globalStyles.defaultTextColor}>
                                    🍿Engin umsögn eins og er, vertu fyrstur til að skrifa umsögn!
                                </Text>
                            ) : (
                                reviews.map((r) => (
                                    <View
                                        key={r.id}
                                        style={{
                                            marginBottom: 12,
                                            padding: 10,
                                            borderRadius: 12,
                                            backgroundColor: '#222',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                marginBottom: 4,
                                            }}
                                        >
                                            {'⭐️'.repeat(r.rating)}{' '}
                                            <Text
                                                style={{
                                                    color: '#aaa',
                                                    fontSize: 12,
                                                }}
                                            >
                                                {new Date(
                                                    r.createdAt
                                                ).toLocaleDateString()}
                                            </Text>
                                        </Text>
                                        <Text
                                            style={
                                                globalStyles.defaultTextColor
                                            }
                                        >
                                            {r.text}
                                        </Text>
                                    </View>
                                ))
                            )}
                        </View>

                        <Text
                            style={[
                                globalStyles.defaultTextColor,
                                { marginBottom: 4 },
                            ]}
                        >
                            Skrifa umsögn✍️
                        </Text>

                        <TextInput
                            value={reviewText}
                            onChangeText={setReviewText}
                            placeholder="Hvað fannst þér um myndina?"
                            placeholderTextColor="#777"
                            multiline
                            style={{
                                borderRadius: 12,
                                padding: 10,
                                minHeight: 70,
                                borderWidth: 1,
                                borderColor: '#444',
                                color: 'white',
                                marginBottom: 8,
                            }}
                        />

                        <Button
                            style={[
                                globalStyles.defaultButton,
                                { alignSelf: 'flex-start' },
                            ]}
                            onPress={handleSubmitReview}
                        >
                            <Text style={globalStyles.defaultTextColor}>
                                Staðfesta umsögn
                            </Text>
                        </Button>
                    </View>

                    <Genres
                        genres={movieInfo.genres}
                        genresContainer={styles.sectionContentContainer}
                        textStyels={styles.sectionText}
                    />
                </View>

                <ActorsAndDirectors
                    actors={names.actors}
                    directors={names.directors}
                    writers={names.writer}
                />

                {Array.isArray(movieInfo.showtimes) &&
                    movieInfo.showtimes.length > 0 && (
                        <View>
                            {movieInfo.showtimes.map((show) => (
                                <Showtime
                                    key={show.cinema.id}
                                    name={show.cinema.name}
                                    schedules={show.schedule}
                                />
                            ))}
                        </View>
                    )}
                <View>
                    <Ratings ratings={movieInfo.ratings} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
