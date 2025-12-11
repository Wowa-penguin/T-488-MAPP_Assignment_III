import ActorsAndDirectors from '@/components/actorsAndDirectors';
import Genres from '@/components/genres';
import MovieInfoPosterAndPlot from '@/components/movieInfoPosterAndPlot';
import Showtime from '@/components/showtime';
import { Movie } from '@/models/movies';
import { AppDispatch, RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import moviesStyles from '@/styles/movies';
import { checkNames } from '@/utils/checkAndHandelNames';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@/store/favoritesSlice';
import Button from '@/components/button';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const favoriteIds = useSelector(
        (state: RootState) => state.favorites.movieIds
    );

    const movies = useSelector((state: RootState) => state.movies.items);
    const theaters = useSelector((state: RootState) => state.theater.items);

    const params = useLocalSearchParams<{
        movieId: string;
    }>();

    const movieInfo: Movie | undefined = movies.find(
        (movie) => movie._id === params.movieId
    );

    if (!movieInfo) {
        // if _id is missing or movie not found
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

    // now movieInfo is definitely defined
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
                    {/* Age limit */}
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

                    {/* Duration */}
                    <Text style={globalStyles.defaultTextColor}>
                        Duration {movieInfo.durationMinutes} minutes long
                    </Text>
                </View>

                <Button
                    style={[globalStyles.defaultButton, { marginTop: 12, width: 210, height: 40, alignItems: 'center' }]}
                    onPress={() => dispatch(toggleFavorite(movieInfo._id))}
                >
                    <Text style={globalStyles.defaultTextColor}>
                        {isFavorite
                            ? 'Remove from favorites'
                            : '❤️'}
                    </Text>
                </Button>

                <View style={styles.sectionContainer}>
                    <View style={styles.titleOfSectionContainer}>
                        <Text style={styles.titleOfSection}>Genres</Text>
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

                <View>
                    {movieInfo.showtimes.map((show) => (
                        <Showtime
                            key={show.cinema.id}
                            name={show.cinema.name}
                            schedules={show.schedule}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
