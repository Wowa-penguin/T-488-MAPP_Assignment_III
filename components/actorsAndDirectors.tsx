import styles from '@/styles/movieDetailes';
import { Text, View } from 'react-native';

type ActorsAndDirectorsProps = {
    actors: string[] | undefined;
    directors: string[] | undefined;
    writers: string[] | undefined;
};

const ActorsAndDirectors = ({
    actors,
    directors,
    writers,
}: ActorsAndDirectorsProps) => {
    return (
        <View style={{ gap: 10 }}>
            <View style={styles.sectionContainer}>
                <View style={styles.titleOfSectionContainer}>
                    <Text style={styles.titleOfSection}>Actors</Text>
                </View>
                {actors ? (
                    <View style={styles.sectionContentContainer}>
                        {actors.map((name) => (
                            <View key={name}>
                                <Text style={styles.sectionText}>{name}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text>N/A</Text>
                )}
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.titleOfSectionContainer}>
                    <Text style={styles.titleOfSection}>Directors</Text>
                </View>
                {directors ? (
                    <View style={styles.sectionContentContainer}>
                        {directors.map((name) => (
                            <View key={name}>
                                <Text style={styles.sectionText}>{name}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text>N/A</Text>
                )}
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.titleOfSectionContainer}>
                    <Text style={styles.titleOfSection}>Writers</Text>
                </View>
                {writers ? (
                    <View style={styles.sectionContentContainer}>
                        {writers.map((name) => (
                            <View key={name}>
                                <Text style={styles.sectionText}>{name}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text>N/A</Text>
                )}
            </View>
        </View>
    );
};

export default ActorsAndDirectors;
