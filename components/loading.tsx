import { ActivityIndicator, Text, View } from 'react-native';

const Loading = () => {
    return (
        <View>
            <ActivityIndicator />
            <Text>Loading movies…</Text>
        </View>
    );
};

export default Loading;
