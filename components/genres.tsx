import { Genre } from '@/models/movies';
import { StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

type GenresProps = {
    genres: Genre[];
    genresContainer?: StyleProp<ViewStyle>;
    textStyels?: StyleProp<TextStyle>;
};

const Genres = ({ genres, genresContainer, textStyels }: GenresProps) => {
    return (
        <>
            <View
                style={
                    genres && genres.length >= 3
                        ? genresContainer
                        : [genresContainer, { flexDirection: 'row' }]
                }
            >
                {genres.map((genre) => (
                    <View key={genre.ID}>
                        <Text style={textStyels}>{genre.Name}</Text>
                    </View>
                ))}
            </View>
        </>
    );
};

export default Genres;
