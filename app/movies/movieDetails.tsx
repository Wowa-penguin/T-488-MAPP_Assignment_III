import ActorsAndDirectors from '@/components/actorsAndDirectors';
import Button from '@/components/button';
import Error from '@/components/error';
import MovieInfoPosterAndPlot from '@/components/movieInfoPosterAndPlot';
import Ratings from '@/components/ratings';
import ReviewSection from '@/components/reviewSection';
import Showtime from '@/components/showtime';
import TrailerPlayer from '@/components/trailerPlayer';
import { Movie } from '@/models/movies';
import { RootState } from '@/store';
import { toggleFavorite } from '@/store/favoritesSlice';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import moviesStyles from '@/styles/movies';
import { checkNames } from '@/utils/checkAndHandelNames';
import { getTrailerUrl } from '@/utils/getTrailerUrl';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, Share, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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

    const allMovies = [...movies, ...upcomingMovies];

    const movieInfo: Movie | undefined = allMovies.find(
        (movie) => movie._id === movieId
    );

    if (!movieInfo) {
        // if _id is missing or movie not found
        return <Error>Movie not found.</Error>;
    }

    const trailerUrl = getTrailerUrl(movieInfo);
    const handleShare = async () => {
        const link = `myapp://movie/${movieInfo._id}`;

        await Share.share({
            message: `${movieInfo.title} (${movieInfo.year})\n${link}`,
        });
    };

    const isFavorite = favoriteIds.includes(movieInfo._id);

    const names = checkNames({
        actors: movieInfo.actors_abridged,
        directors: movieInfo.directors_abridged,
        omdb: movieInfo.omdb[0],
    });

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
                        {movieInfo.durationMinutes} mínútur
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button
                        style={[
                            globalStyles.defaultButton,
                            styles.favoriteButton,
                        ]}
                        onPress={() => dispatch(toggleFavorite(movieInfo._id))}
                    >
                        <Text style={globalStyles.defaultTextColor}>
                            {isFavorite ? '❤️' : '🤍'}
                        </Text>
                    </Button>
                    <Button
                        onPress={handleShare}
                        style={styles.touchableOpacity}
                        textStyle={styles.touchableOpacityText}
                    >
                        Share
                    </Button>
                </View>

                <ReviewSection movieId={movieInfo._id} />

                <ActorsAndDirectors
                    actors={names.actors}
                    directors={names.directors}
                    writers={names.writer}
                />

                <View style={styles.sectionContainer}>
                    <View style={styles.titleOfSectionContainer}>
                        <Text style={styles.titleOfSection}>Trailer</Text>
                    </View>

                    <View style={styles.sectionContentContainer}>
                        <TrailerPlayer trailerUrl={trailerUrl} />
                    </View>
                </View>

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
                    {movieInfo.ratings ? (
                        <Ratings ratings={movieInfo.ratings} />
                    ) : null}
                </View>
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
