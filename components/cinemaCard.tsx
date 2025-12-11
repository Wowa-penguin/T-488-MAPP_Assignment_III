import styles from '@/styles/cinemas';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#5a4ca5', '#192f6a']}
                locations={[0, 0.35, 0.7, 1]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            />

            <Text style={styles.name}>{name}</Text>
            {website ? <Text style={styles.website}>{website}</Text> : null}
        </TouchableOpacity>
    );
};

export default CinemaCard;
