import { Genre } from '@/models/movies';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import Button from './button';
import Genres from './genres';

type MovieCardProps = {
    _id: string;
    title: string;
    year: string;
    poster: string;
    genres: Genre[];
    certificateIS: string;
    certificateImg: string;
};

const MovieCard = ({
    _id,
    title,
    year,
    poster,
    genres,
    certificateIS,
    certificateImg,
}: MovieCardProps) => {
    const router = useRouter();

    const handleButtonPress = () => {
        router.push({
            pathname: '/movies/movieDetails',
            params: { movieId: _id },
        });
    };

    return (
        <View style={styles.movieCardContainer}>
            <Image
                style={styles.poster}
                source={{
                    uri: poster,
                }}
            />
            <View style={styles.cardContent}>
                <View>
                    <Text
                        style={[
                            styles.movieTitle,
                            globalStyles.defaultTextColor,
                        ]}
                    >
                        {title}
                    </Text>
                    <Text style={globalStyles.defaultTextColor}>{year}</Text>
                </View>

                <Genres
                    genres={genres}
                    genresContainer={styles.genresContainer}
                    textStyels={globalStyles.defaultTextColor}
                />

                <View style={styles.footerRow}>
                    <View style={styles.certificateRow}>
                        {certificateIS && certificateImg ? (
                            <>
                                <Text style={globalStyles.defaultTextColor}>
                                    {certificateIS}
                                </Text>
                                <Image
                                    style={styles.certificateIcon}
                                    source={{
                                        uri: certificateImg,
                                    }}
                                />
                            </>
                        ) : (
                            <Text style={globalStyles.defaultTextColor}>
                                * Á ekki Við
                            </Text>
                        )}
                    </View>
                    <Button
                        style={[
                            {
                                width: 'auto',
                                height: 'auto',
                            },
                            globalStyles.defaultButton,
                        ]}
                        textStyle={{ color: 'red' }}
                        onPress={handleButtonPress}
                    >
                        <Text style={globalStyles.defaultTextColor}>
                            Skoða Tíma
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default MovieCard;
