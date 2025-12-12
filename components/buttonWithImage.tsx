import { imageMap } from '@/utils/imageMap';
import { Image, ImageStyle, StyleProp, TouchableOpacity } from 'react-native';

type ButtonWithImageProps = {
    keyName: string;
    containerStyle?: StyleProp<any>;
    imgStyle?: StyleProp<ImageStyle>;
    onPress?: () => void;
};

const ButtonWithImage = ({
    keyName,
    containerStyle,
    imgStyle,
    onPress,
}: ButtonWithImageProps) => {
    return (
        <TouchableOpacity style={containerStyle} onPress={onPress}>
            <Image source={imageMap[keyName]} style={imgStyle} />
        </TouchableOpacity>
    );
};
export default ButtonWithImage;
