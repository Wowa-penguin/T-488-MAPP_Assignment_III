import { LinearGradient } from 'expo-linear-gradient';

type CardGradientProps = {
    style?: any;
};

const CardGradient = ({ style }: CardGradientProps) => {
    return (
        <LinearGradient
            colors={['#24a', '#147', '#246', '#014']}
            locations={[0, 0.35, 0.7, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={style}
        />
    );
};

export default CardGradient;
