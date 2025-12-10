import ActorsAndDirectors from '@/components/actorsAndDirectors';
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

const MovieDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const movies = useSelector((state: RootState) => state.movies);

    const params = useLocalSearchParams<{
        movieId: string;
    }>();

    const movieInfo: Movie | undefined = movies.items.find(
        (movie) => movie._id === params.movieId
    );

    if (!movieInfo) {
        //* if _id is missing
        return (
            <View>
                <Text>Error</Text>
            </View>
        );
    }

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
                            source={{
                                uri: movieInfo.certificateImg,
                            }}
                        />
                    </View>
                    <Text style={globalStyles.defaultTextColor}>
                        Duration {movieInfo.durationMinutes} minutes long
                    </Text>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.titleOfSectionContainer}>
                        <Text style={styles.titleOfSection}>Genres</Text>
                    </View>
                    <View style={styles.sectionContentContainer}>
                        {movieInfo.genres.map((genre) => (
                            <View key={genre.ID}>
                                <Text style={styles.sectionText}>
                                    {genre.Name}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                <ActorsAndDirectors
                    actors={names.actors}
                    directors={names.directors}
                    writers={names.writer}
                />

                <Showtime />
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
