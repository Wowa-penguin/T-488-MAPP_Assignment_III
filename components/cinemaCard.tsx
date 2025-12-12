import styles from '@/styles/cinemas';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import CardGradient from './cardGradient';

type CinemaCardProps = {
    id: number;
    name: string;
    website?: string;
};

const CinemaCard = ({ id, name, website }: CinemaCardProps) => {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: '/cinemas/cinemaDetails',
            params: { cinemaId: id },
        });
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <CardGradient style={styles.gradient} />

            <Text style={styles.name}>{name}</Text>
            {website ? <Text style={styles.website}>{website}</Text> : null}
        </TouchableOpacity>
    );
};

export default CinemaCard;
