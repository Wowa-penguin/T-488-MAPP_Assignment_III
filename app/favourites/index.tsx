import { Text, View } from 'react-native';
import globalStyles from '@/styles/globalStyles';

const Index = () => {
    return (
        <View
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <Text>Favorites</Text>
        </View>
    );
};

export default Index;
