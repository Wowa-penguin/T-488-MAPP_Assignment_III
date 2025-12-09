import styles from '@/styles/cinemas';
import { Text, View } from 'react-native';

type CinemaCardProps = {
    id: number;
    name: string;
};

const CinemaCard = ({ id, name }: CinemaCardProps) => {
    return (
        <View style={styles.card}>
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

export default CinemaCard;
