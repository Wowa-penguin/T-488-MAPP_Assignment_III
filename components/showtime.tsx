import Button from '@/components/button';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movieDetailes';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from 'react-native';

type ShowtiemProps = {
    name: string;
    schedules: Schedule[];
};

type Schedule = {
    time: string;
    purchase_url: string;
    info: string;
};

const Showtime = ({ name, schedules }: ShowtiemProps) => {
    const handleRedirect = async (url: string) => {
        await WebBrowser.openBrowserAsync(url);
    };

    if (name === 'Sambíóin, Akureyri') {
        name = 'Sambíóin Akureyri';
    } else if (name === 'Kringlubíó') {
        name = 'Sambíóin Kringlunni';
    } else if (name === 'Álfabakki') {
        name = 'Samíóin Álfabakka';
    }

    return (
        <View style={{ marginBottom: 10, gap: 10 }}>
            <View style={styles.titleOfSectionContainer}>
                <Text style={styles.titleOfSection}>{name}</Text>
            </View>
            <View style={styles.scheduleContainer}>
                {schedules.map((schedule) => (
                    <View key={schedule.purchase_url}>
                        <Button
                            style={styles.timeButton}
                            textStyle={globalStyles.defaultTextColor}
                            onPress={() =>
                                handleRedirect(schedule.purchase_url)
                            }
                        >
                            {schedule.time}
                        </Button>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default Showtime;
