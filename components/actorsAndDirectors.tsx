import styles from '@/styles/movieDetailes';
import { Text, View } from 'react-native';
import DisplayNames from './displayNames';

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
                <DisplayNames names={actors} />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.titleOfSectionContainer}>
                    <Text style={styles.titleOfSection}>Directors</Text>
                </View>
                <DisplayNames names={directors} />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.titleOfSectionContainer}>
                    <Text style={styles.titleOfSection}>Writers</Text>
                </View>
                <DisplayNames names={writers} />
            </View>
        </View>
    );
};

export default ActorsAndDirectors;
