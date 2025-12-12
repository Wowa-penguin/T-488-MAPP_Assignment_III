import { Text, View } from 'react-native';

type ErrorProps = {
    children: React.ReactNode;
};

const Error = ({ children }: ErrorProps) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

export default Error;
