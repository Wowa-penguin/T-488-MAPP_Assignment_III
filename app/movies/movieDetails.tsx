import { Movie } from '@/models/movies';
import { AppDispatch, RootState } from '@/store';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text, View } from 'react-native';
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

    return (
        <View>
            <Text>Movie Details</Text>
            <Text>{movieInfo.title}</Text>
            <Text>{movieInfo.plot}</Text>
            <Text>{params.movieId}</Text>
        </View>
    );
};

export default MovieDetails;
