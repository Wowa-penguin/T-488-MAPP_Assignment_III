import Loading from '@/components/loading';
import Button from '@/components/button';
import MovieCard from '@/components/movieCard';
import { AppDispatch, RootState } from '@/store';
import { fetchUpcomingMovies } from '@/store/upcomingSlice';
import globalStyles from '@/styles/globalStyles';
import movieStyles from '@/styles/movies';
import { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Index = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, status, error } = useSelector(
        (state: RootState) => state.upcoming
    );
    const sortedItems = [...items].sort((a, b) => {
        const aDate = (a as any)['release-dateIS'] ?? '';
        const bDate = (b as any)['release-dateIS'] ?? '';
        return aDate.localeCompare(bDate);
    });

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
            contentContainerStyle={{ paddingVertical: 16 }}        
        >
            <View style={{ paddingHorizontal: 8, marginBottom: 8}}>
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        { fontSize: 22, fontWeight: 'bold' },
                    ]}
                >
                    Væntanlegar mydir
                </Text>
            </View>                       

            {sortedItems.length === 0 ? (
                <View style={{ paddingHorizontal: 16 }}>
                    <Text style={globalStyles.defaultTextColor}>
                        Engar væntanlegar myndir fundust.
                    </Text>
                </View>                
            ) : (
                <View style={movieStyles.container}>
                    {sortedItems.map((movie) => {
                        const releaseDateIS = (movie as any)['release-dateIS'];

                        return (
                            <View key={movie._id} style={{ gap: 4 }}>
                                {releaseDateIS && (
                                    <Text
                                        style={[
                                            globalStyles.defaultTextColor,
                                            { marginLeft: 12 },
                                        ]}
                                    >
                                        Frumsýning: {releaseDateIS}
                                    </Text>
                                )}

                                <MovieCard                                
                                    _id={movie._id}
                                    title={
                                        movie.alternativeTitles.length <
                                            movie.title.length &&
                                        movie.alternativeTitles
                                            ? movie.alternativeTitles
                                            : movie.title
                                    }
                                    year={movie.year}
                                    poster={movie.poster}
                                    genres={movie.genres}
                                    certificateIS={movie.certificateIS}
                                    certificateImg={movie.certificateImg}
                                />                    
                            </View>
                        );                
                    })}
                </View>
            )}            
        </ScrollView>
    );
};

export default Index;
