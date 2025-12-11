import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import { View } from 'react-native';
import Button from './button';
import Search from './search';

type FilterProps = {
    handleClick: () => void;
    value: string;
    onChange: (text: string) => void;
};

const Filter = ({ handleClick, value, onChange }: FilterProps) => {
    return (
        <View style={styles.filterContainer}>
            <Search
                title={''}
                placeholder="Filter: Name or year"
                value={value}
                onChange={onChange}
                textStyle={globalStyles.defaultTextColor}
                input={styles.input}
            />
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
