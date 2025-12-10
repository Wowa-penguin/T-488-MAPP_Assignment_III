import CinemaCard from '@/components/cinemaCard';
import Loading from '@/components/loading';
import { AppDispatch, RootState } from '@/store';
import { fetchTheaters } from '@/store/theaterSlice';
import styles from '@/styles/cinemas';
import React, { useEffect, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const cinemas = useSelector((state: RootState) => state.cinemas.items);

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
