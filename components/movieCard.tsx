import { Genre } from '@/models/movies';
import styles from '@/styles/movies';
import { Image, Text, View } from 'react-native';

type MovieCardProps = {
    title: string;
    poster: string;
    genres: Genre[];
};

const MovieCard = ({ title, poster, genres }: MovieCardProps) => {
    return (
        <View style={styles.movieCardContainer}>
            <Image
                style={styles.poster}
                source={{
                    uri: poster,
                }}
            />
            <View>
                <Text style={styles.movieTitle}>{title}</Text>
                <View style={styles.genresContainer}>
                    {genres.map((genre) => (
                        <View key={genre.ID}>
                            <Text>{genre.Name}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default MovieCard;
