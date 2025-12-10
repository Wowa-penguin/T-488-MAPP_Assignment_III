import CinemaCard from '@/components/cinemaCard';
import { AppDispatch, RootState } from '@/store';
import styles from '@/styles/cinemas';
import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cinemas = useSelector((state: RootState) => state.cinemas.cinemas);

    const sortedCinemas = useMemo(
        () =>
            [...cinemas].sort((a, b) => 
                a.name.localeCompare(b.name, 'is', { sensitivity: 'base' })
            ),
        [cinemas]
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                {sortedCinemas.map((cinema) => (
                    <CinemaCard
                        key={cinema.id}
                        id={cinema.id}
                        name={cinema.name}
                        website={cinema.website}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Index;
