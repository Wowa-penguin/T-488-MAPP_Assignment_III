import globalStyles from '@/styles/globalStyles';
import { Text, View } from 'react-native';

type DisplayFiltersProps = {
    filters: {
        rating: string;
        actors: string;
        directors: string;
        pg: string;
    };
};

const DisplayFilters = ({ filters }: DisplayFiltersProps) => {
    return (
        <>
            <Text style={globalStyles.defaultTextColor}>Filters: </Text>
            <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }}>
                {filters.rating ? (
                    <Text style={globalStyles.defaultTextColor}>
                        Rating: {filters.rating}
                    </Text>
                ) : (
                    <></>
                )}
                {filters.actors ? (
                    <Text style={globalStyles.defaultTextColor}>
                        Actor: {filters.actors}
                    </Text>
                ) : (
                    <></>
                )}
                {filters.directors ? (
                    <Text style={globalStyles.defaultTextColor}>
                        Director: {filters.directors}
                    </Text>
                ) : (
                    <></>
                )}
                {filters.pg ? (
                    <Text style={globalStyles.defaultTextColor}>
                        PG: {filters.pg}
                    </Text>
                ) : (
                    <></>
                )}
            </View>
        </>
    );
};

export default DisplayFilters;
