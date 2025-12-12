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
    let imdbRating = (parseFloat(ratings.imdb) / 10) * 100;
    if (isNaN(imdbRating)) imdbRating = 0;

    return (
        <View style={{ gap: 10 }}>
            <View style={styles.titleOfSectionContainer}>
                <Text style={globalStyles.defaultTitel}>Ratings</Text>
            </View>
            <View style={styles.ratingLogosContainer}>
                <View style={styles.ratingLogoAndTextContainer}>
                    <Image
                        source={require('@/assets/imdb-logo.png')}
                        style={styles.ratingsLogo}
                    />
                    <Text style={globalStyles.defaultTitel}>
                        {imdbRating.toFixed(0)}%
                    </Text>
                </View>
                <View style={styles.ratingLogoAndTextContainer}>
                    <Image
                        source={require('@/assets/Rotten_Tomatoes_audience.png')}
                        style={styles.ratingsLogo}
                    />
                    <Text style={globalStyles.defaultTitel}>
                        {isNaN(parseFloat(ratings.rotten_audience))
                            ? '0'
                            : parseFloat(ratings.rotten_audience).toFixed(0)}
                        %
                    </Text>
                </View>
                <View style={styles.ratingLogoAndTextContainer}>
                    <Image
                        source={require('@/assets/Rotten_Tomatoes.png')}
                        style={styles.ratingsLogo}
                    />
                    <Text style={globalStyles.defaultTitel}>
                        {isNaN(parseFloat(ratings.rotten_critics))
                            ? '0'
                            : parseFloat(ratings.rotten_critics).toFixed(0)}
                        %
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Ratings;
