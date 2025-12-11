import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import globalStyles from '@/styles/globalStyles';
import MovieCard from '@/components/movieCard';

const FavoritesScreen = () => {
  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.movieIds
  );
  const movies = useSelector((state: RootState) => state.movies.items);

  const favoriteMovies = movies.filter((m) => favoriteIds.includes(m._id));

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
        renderItem={({ item }) => (
          <MovieCard
                _id={item._id}
                title={item.title}
                poster={item.poster}
                genres={item.genres}
                certificateIS={item.certificateIS}
                certificateImg={item.certificateImg} year={''}          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
