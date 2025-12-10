import Button from '@/components/button';
import Loading from '@/components/loading';
import { AppDispatch, RootState } from '@/store';
import { fetchMovies } from '@/store/movieSlice';
import { fetchTheaters } from '@/store/theaterSlice';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
    //* #### Redux state ####
    const dispatch = useDispatch<AppDispatch>();
    const {
        items: movies,
        status,
        error,
    } = useSelector((state: RootState) => state.movies);

    //* #### Loading movies and theaters from api ####
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchMovies());
            dispatch(fetchTheaters());
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
            <Button
                style={{
                    backgroundColor: '#4A90E2',
                    padding: 12,
                    borderRadius: 8,
                    alignItems: 'center',
                }}
                textStyle={{
                    color: '#fff',
                    fontWeight: '600',
                }}
                onPress={() => console.log('Pressed!')}
            >
                Save
            </Button>
        </View>
    );
}
