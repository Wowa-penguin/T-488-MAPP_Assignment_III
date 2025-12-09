import CinemaCard from '@/components/cinemaCard';
import { AppDispatch, RootState } from '@/store';
import styles from '@/styles/cinemas';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cinemas = useSelector((state: RootState) => state.cinemas.cinemas);

    return (
        <ScrollView>
            <View style={styles.container}>
                {cinemas.map((cinema) => (
                    <CinemaCard
                        key={cinema.id}
                        id={cinema.id}
                        name={cinema.name}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Index;
