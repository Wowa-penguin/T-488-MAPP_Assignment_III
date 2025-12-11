import styles from '@/styles/movieDetailes';
import { Text, View } from 'react-native';

type DisplayNamesProps = {
    names: string[] | undefined;
};

const DisplayNames = ({ names }: DisplayNamesProps) => {
    return (
        <>
            {names ? (
                <View style={styles.sectionContentContainer}>
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
