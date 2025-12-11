import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { Text, View } from 'react-native';

const FilterMenu = () => {
    return (
        <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
                <Text style={globalStyles.defaultTextColor}>Hello</Text>
            </View>
        </View>
    );
};

export default FilterMenu;
