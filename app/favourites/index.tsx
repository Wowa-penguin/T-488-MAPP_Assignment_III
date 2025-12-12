import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MovieCard from '@/components/movieCard';
import { Movie } from '@/models/movies';
import { RootState } from '@/store';
import { reorderFavorites } from '@/store/favoritesSlice';
import globalStyles from '@/styles/globalStyles';

const FavoritesScreen = () => {
    const dispatch = useDispatch();

    const favoriteIds = useSelector(
        (state: RootState) => state.favorites.movieIds
    );
    const movies = useSelector((state: RootState) => state.movies.items);

    const favoriteMovies: Movie[] = favoriteIds
        .map((id) => movies.find((m) => m._id === id) as Movie | undefined)
        .filter((m): m is Movie => Boolean(m));

    const moveUp = (index: number) => {
        if (index === 0) return;
        dispatch(
            reorderFavorites({
                fromIndex: index,
                toIndex: index - 1,
            })
        );
    };

    const moveDown = (index: number) => {
        if (index === favoriteMovies.length - 1) return;
        dispatch(
            reorderFavorites({
                fromIndex: index,
                toIndex: index + 1,
            })
        );
    };

    if (favoriteMovies.length === 0) {
        return (
            <View
                style={[
                    { flex: 1, justifyContent: 'center', alignItems: 'center' },
                    globalStyles.defaultBackgroundColor,
                ]}
            >
                <Text style={globalStyles.defaultTextColor}>
                    You have no favorite movies yet☹️
                </Text>
            </View>
        );
    }

    return (
        <View
            style={[
                { flex: 1, paddingVertical: 12 },
                globalStyles.defaultBackgroundColor,
            ]}
        >
            <FlatList
                data={favoriteMovies}
                keyExtractor={(item) => item._id}
                contentContainerStyle={{ gap: 16, paddingBottom: 24 }}
                renderItem={({ item, index }) => (
                    <View style={{ gap: 8 }}>
                        <MovieCard
                            _id={item._id}
                            title={item.title}
                            poster={item.poster}
                            genres={item.genres}
                            certificateIS={item.certificateIS}
                            certificateImg={item.certificateImg}
                            year={''}
                        />

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                gap: 12,
                                paddingRight: 16,
                            }}
                        >
                            <TouchableOpacity
                                disabled={index === 0}
                                onPress={() => moveUp(index)}
                            >
                                <Text
                                    style={{
                                        color: index === 0 ? '#555' : '#fff',
                                    }}
                                >
                                    ⬆️ Move up
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                disabled={index === favoriteMovies.length - 1}
                                onPress={() => moveDown(index)}
                            >
                                <Text
                                    style={{
                                        color:
                                            index === favoriteMovies.length - 1
                                                ? '#555'
                                                : '#fff',
                                    }}
                                >
                                    ⬇️ Move down
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default FavoritesScreen;
