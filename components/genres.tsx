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
            {genres.length >= 3 ? (
                <View style={genresContainer}>
                    {genres.map((genre) => (
                        <View key={genre.ID}>
                            <Text style={textStyels}>{genre.Name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <View style={[genresContainer, { flexDirection: 'row' }]}>
                    {genres.map((genre) => (
                        <View key={genre.ID}>
                            <Text style={textStyels}>{genre.Name}</Text>
                        </View>
                    ))}
                </View>
            )}
        </>
    );
};

export default Genres;
