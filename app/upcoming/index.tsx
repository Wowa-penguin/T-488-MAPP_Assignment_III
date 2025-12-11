import Loading from '@/components/loading';
import Button from '@/components/button';
import { AppDispatch, RootState } from '@/store';
import { fetchUpcomingMovies } from '@/store/upcomingSlice';
import globalStyles from '@/styles/globalStyles';
import { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
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
        return (
            <View
                style={[
                    { flex: 1, justifyContent: 'center', alignItems: 'center' },
                    globalStyles.defaultBackgroundColor,
                ]}
            >        
                <Loading />
            </View>
        );
    }

    if (status === 'failed') {
        return (
            <View
                style={[
                    {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 16,
                    },
                    globalStyles.defaultBackgroundColor,
                ]}
            >
                <Text style={globalStyles.defaultTextColor}>
                    Villa við að sækja væntanlegar myndir.
                </Text>

                {error && (
                    <Text
                        style={[
                            globalStyles.defaultTextColor,
                            { marginTop: 8 },
                        ]}
                    >
                        {error}
                    </Text>
                )}

                <Button
                    style={[
                        globalStyles.defaultButton,
                        { marginTop: 20, paddingHorizontal: 12 },
                    ]}
                    textStyle={globalStyles.defaultTextColor}
                    onPress={() => dispatch(fetchUpcomingMovies())}
                >
                    Reyna aftur
                </Button>
            </View>
        );
    }

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ padding: 16 }}        
        >
            <Text
                style={[
                    globalStyles.defaultTextColor,
                    { fontSize: 22, fontWeight: 'bold', marginBottom: 12 },
                ]}
            >
                Væntanlegar mydir
            </Text>

            {items.length === 0 ? (
                <Text style={globalStyles.defaultTextColor}>
                    Engar væntanlegar myndir fundust.
                </Text>
            ) : (
                items.map((item) => (
                    <View key={item._id} style={{ marginBottom: 8 }}>
                        <Text style={globalStyles.defaultTextColor}>
                            {item.title}
                        </Text>
                    </View>
                ))
            )}            
        </ScrollView>
    );
};

export default Index;
