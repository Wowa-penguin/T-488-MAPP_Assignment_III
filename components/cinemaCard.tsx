import styles from '@/styles/cinemas';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

type CinemaCardProps = {
    id: number;
    name: string;
    website?: string;
};

const CinemaCard = ({ id, name, website }: CinemaCardProps) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(
            `/cinemas/cinemaDetails?cinemaId=${id}` as never
        );
    };

    return (
        <TouchableOpacity style={styles.card} onPress={handlePress}>
            <Text style={styles.name}>{name}</Text>
            {website ? (
                <Text style={{ color: '#93c5fd', marginTop: 4 }}>
                    {website}
                </Text>
            ) : null}
        </TouchableOpacity>
    );
};

export default CinemaCard;