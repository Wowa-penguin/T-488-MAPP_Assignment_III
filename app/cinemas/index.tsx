import CinemaCard from '@/components/cinemaCard';
import Error from '@/components/error';
import Loading from '@/components/loading';
import { AppDispatch, RootState } from '@/store';
import { fetchTheaters } from '@/store/theaterSlice';
import styles from '@/styles/cinemas';
import globalStyles from '@/styles/globalStyles';
import React, { useEffect, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();

    const {
        items: theater,
        status,
        error,
    } = useSelector((state: RootState) => state.theater);

    const sortedTheaters = useMemo(
        () => [...theater].sort((a, b) => a.name.localeCompare(b.name)),
        [theater]
    );

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTheaters());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        return (
            <View>
                <Error>{error}</Error>
            </View>
        );
    }

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <View style={styles.container}>
                {sortedTheaters.map((cinema) => (
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
