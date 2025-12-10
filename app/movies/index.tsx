import MovieCard from '@/components/movieCard';
import { AppDispatch, RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state.movies);
    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                {movies.items.map((movie) => (
                    // <Link
                    //     key={movie._id}
                    //     href={{
                    //         pathname: '/movies/movieDetails',
                    //         params: { movieId: movie._id },
                    //     }}
                    //     push
                    // >
                    <MovieCard
                        key={movie._id}
                        _id={movie._id}
                        title={
                            movie.alternativeTitles.length <
                                movie.title.length && movie.alternativeTitles
                                ? movie.alternativeTitles
                                : movie.title
                        }
                        poster={movie.poster}
                        genres={movie.genres}
                        certificateIS={movie.certificateIS}
                        certificateImg={movie.certificateImg}
                    />
                    // </Link>
                ))}
            </View>
        </ScrollView>
    );
};

export default Index;
