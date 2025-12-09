import MovieCard from '@/components/movieCard';
import { AppDispatch, RootState } from '@/store';
import styles from '@/styles/movies';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const movies = useSelector((state: RootState) => state.movies);
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                {movies.items.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        title={
                            movie.alternativeTitles.length <
                                movie.title.length && movie.alternativeTitles
                                ? movie.alternativeTitles
                                : movie.title
                        }
                        poster={movie.poster}
                        genres={movie.genres}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Index;
