import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import { Image, Text, View } from 'react-native';

type RatingsProps = {
    ratings: {
        imdb: string;
        rotten_audience: string;
        rotten_critics: string;
    };
};

const Ratings = ({ ratings }: RatingsProps) => {
    const imdbRating = (parseFloat(ratings.imdb) / 10) * 100;

    return (
        <View style={styles.ratingLogosContainer}>
            <View style={styles.ratingLogoAndTextContainer}>
                <Image
                    source={require('@/assets/imdb-logo.png')}
                    style={styles.ratingsLogo}
                />
                <Text style={globalStyles.defaultTextColor}>
                    {imdbRating.toFixed(0)}%
                </Text>
            </View>
            <View style={styles.ratingLogoAndTextContainer}>
                <Image
                    source={require('@/assets/Rotten_Tomatoes_audience.png')}
                    style={styles.ratingsLogo}
                />
                <Text style={globalStyles.defaultTextColor}>
                    {parseFloat(ratings.rotten_audience).toFixed(0)}%
                </Text>
            </View>
            <View style={styles.ratingLogoAndTextContainer}>
                <Image
                    source={require('@/assets/Rotten_Tomatoes.png')}
                    style={styles.ratingsLogo}
                />
                <Text style={globalStyles.defaultTextColor}>
                    {parseFloat(ratings.rotten_critics).toFixed(0)}%
                </Text>
            </View>
        </View>
    );
};

export default Ratings;
