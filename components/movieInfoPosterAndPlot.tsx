import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import { Image, Text, View } from 'react-native';

type MovieInfoPosterAndPlotProps = {
    poster: string;
    title: string;
    plot: string;
};

const MovieInfoPosterAndPlot = ({
    poster,
    title,
    plot,
}: MovieInfoPosterAndPlotProps) => {
    return (
        <View style={styles.posterAndPlotContainer}>
            <Image
                style={styles.poster}
                source={{
                    uri: poster,
                }}
            />
            <View style={{ flex: 1, gap: 3 }}>
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { fontSize: 20, fontWeight: '700' },
                    ]}
                >
                    {title}
                </Text>
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { flexShrink: 1, fontSize: 14 },
                    ]}
                >
                    {plot}
                </Text>
            </View>
        </View>
    );
};

export default MovieInfoPosterAndPlot;
