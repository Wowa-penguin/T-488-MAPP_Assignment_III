import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { TextInput, View } from 'react-native';
import Button from './button';

type FilterProps = {
    handleClick: () => void;
};

const Filter = ({ handleClick }: FilterProps) => {
    return (
        <View style={styles.filterContainer}>
            <TextInput style={styles.input} />
            <Button
                style={[
                    {
                        width: '20%',
                        height: '65%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    globalStyles.defaultButton,
                ]}
                textStyle={globalStyles.defaultTextColor}
                onPress={handleClick}
            >
                Filter
            </Button>
        </View>
    );
};

export default Filter;
