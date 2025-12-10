import Loading from '@/components/loading';
import { AppDispatch, RootState } from '@/store';
import { fetchUpcomingMovies } from '@/store/upcomingSlice';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status, error } = useSelector(
        (state: RootState) => state.upcoming
    );

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUpcomingMovies());
        }
    }, [dispatch, status]);

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'failed') {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View>
            {items.map((item) => (
                <View key={item._id}>
                    <Text>{item.title}</Text>
                </View>
            ))}
        </View>
    );
};

export default Index;
