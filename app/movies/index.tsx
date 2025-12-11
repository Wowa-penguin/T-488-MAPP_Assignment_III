import MovieCard from '@/components/movieCard';
import { AppDispatch, RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state.movies.items);
    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        _id={movie._id}
                        title={
                            movie.alternativeTitles.length <
                                movie.title.length && movie.alternativeTitles
                                ? movie.alternativeTitles
                                : movie.title
                        }
                        year={movie.year}
                        poster={movie.poster}
                        genres={movie.genres}
                        certificateIS={movie.certificateIS}
                        certificateImg={movie.certificateImg}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Index;
