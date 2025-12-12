import { Stack } from 'expo-router';

const layout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#124',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 22,
                },
            }}
        />
    );
};

export default layout;
