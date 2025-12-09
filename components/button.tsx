import { ReactNode } from 'react';
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from 'react-native';

type ButtonProps = {
    children: ReactNode;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

const Button = ({ children, onPress, style, textStyle }: ButtonProps) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

export default Button;
