import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Tab [Home|Movies]</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Index;
