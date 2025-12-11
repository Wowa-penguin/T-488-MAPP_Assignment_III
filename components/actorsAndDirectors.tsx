import styles from '@/styles/movieDetailes';
import { View } from 'react-native';
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
                <DisplayNames title={'Actors'} names={actors} />
            </View>
            <View style={styles.sectionContainer}>
                <DisplayNames title={'Directors'} names={directors} />
            </View>
            <View style={styles.sectionContainer}>
                <DisplayNames title={'Writers'} names={writers} />
            </View>
        </View>
    );
};

export default ActorsAndDirectors;
