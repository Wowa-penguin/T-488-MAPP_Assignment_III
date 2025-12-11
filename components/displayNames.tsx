import styles from '@/styles/movieDetailes';
import { Text, View } from 'react-native';

type DisplayNamesProps = {
    title: string;
    names: string[] | undefined;
};

const DisplayNames = ({ title, names }: DisplayNamesProps) => {
    return (
        <>
            <View style={styles.titleOfSectionContainer}>
                <Text style={styles.titleOfSection}>{title}</Text>
            </View>
            {names ? (
                <View
                    style={
                        names && names.length >= 3
                            ? styles.sectionContentContainer
                            : [
                                  styles.sectionContentContainer,
                                  { flexDirection: 'row' },
                              ]
                    }
                >
                    {names.map((name) => (
                        <View key={name}>
                            <Text style={styles.sectionText}>{name}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text>N/A</Text>
            )}
        </>
    );
};

export default DisplayNames;
