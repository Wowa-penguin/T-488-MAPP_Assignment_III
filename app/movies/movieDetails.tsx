import ActorsAndDirectors from '@/components/actorsAndDirectors';
import { Movie } from '@/models/movies';
import { AppDispatch, RootState } from '@/store';
import styles from '@/styles/movieDetailes';
import moviesStyles from '@/styles/movies';
import { checkNames } from '@/utils/checkAndHandelNames';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const MovieDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const movies = useSelector((state: RootState) => state.movies);

    const params = useLocalSearchParams<{
        movieId: string;
    }>();

    const findMovie: Movie[] = movies.items.filter(
        (movie) => movie._id === params.movieId
    );

    //* The movie that is being viewed
    const movieInfo = findMovie[0];

    const names = checkNames({
        actors: movieInfo.actors_abridged,
        directors: movieInfo.directors_abridged,
        omdb: movieInfo.omdb[0],
    });

    console.log(names);

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#000',
                    padding: 8,
                    gap: 10,
                }}
            >
                <Image
                    style={styles.poster}
                    source={{
                        uri: movieInfo.poster,
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        gap: 8,
                    }}
                >
                    <Text>{movieInfo.title}</Text>
                    <Text style={{ flexShrink: 1 }}>{movieInfo.plot}</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#000',
                }}
            >
                <View style={moviesStyles.certificateRow}>
                    <Text>{movieInfo.certificateIS}</Text>
                    <Image
                        style={moviesStyles.certificateIcon}
                        source={{
                            uri: movieInfo.certificateImg,
                        }}
                    />
                </View>
                <Text>Duration {movieInfo.durationMinutes} minutes long</Text>
            </View>
            <View>
                <Text>Genres</Text>
                <View style={styles.genresContainer}>
                    {movieInfo.genres.map((genre) => (
                        <View key={genre.ID}>
                            <Text>{genre.Name}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <ActorsAndDirectors
                actors={names.actors}
                directors={names.directors}
                writers={names.writer}
            />

            <Text>{movieInfo.year}</Text>
        </View>
    );
};

export default MovieDetails;
