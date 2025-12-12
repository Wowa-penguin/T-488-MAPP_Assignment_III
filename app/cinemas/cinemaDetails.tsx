import { RootState } from '@/store';
import styles from '@/styles/cinemas';
import globalStyles from '@/styles/globalStyles';
import { useLocalSearchParams } from 'expo-router';
import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getCinemaMovies } from '@/utils/cinemaMovies';
import { openLink } from '@/utils/openLink';

import MovieCard from '@/components/movieCard';
import Showtime from '@/components/showtime';

const CinemaDetails = () => {
    const { cinemaId } = useLocalSearchParams<{ cinemaId?: string }>();
    const id = cinemaId ? Number(cinemaId) : NaN;

    const theaters = useSelector((state: RootState) => state.theater.items);
    const theater = theaters.find((t) => t.id === id);

    const movies = useSelector((state: RootState) => state.movies.items);

    const cinemaMovies = useMemo(
        () => getCinemaMovies(movies, id),
        [movies, id]
    );

    if (!theater) {
        return (
            <View
                style={[
                    styles.notFoundContainer,
                    globalStyles.defaultBackgroundColor,
                ]}
            >
                <Text style={globalStyles.defaultTextColor}>
                    Bíó fannst ekki.
                </Text>
            </View>
        );
    }

    return (
        <ScrollView
            style={[
                styles.scrollContainer,
                globalStyles.defaultBackgroundColor,
            ]}
            contentContainerStyle={styles.contentContainer}
        >
            <Text style={[globalStyles.defaultTextColor, styles.theaterTitle]}>
                {theater.name}
            </Text>

            {theater.website && (
                <TouchableOpacity onPress={() => openLink(theater.website)}>
                    <Text style={styles.websiteLink}>{theater.website}</Text>
                </TouchableOpacity>
            )}

            {theater.description && (
                <Text
                    style={[
                        globalStyles.defaultTextColor,
                        styles.descriptionText,
                    ]}
                >
                    {theater.description}
                </Text>
            )}

            <Text style={[globalStyles.defaultTextColor, styles.sectionLabel]}>
                Heimilisfang:
            </Text>
            <Text style={[globalStyles.defaultTextColor, styles.addressText]}>
                {theater.address}, {theater.city}
            </Text>
            {theater.phone && (
                <>
                    <Text
                        style={[
                            globalStyles.defaultTextColor,
                            styles.phoneLabel,
                        ]}
                    >
                        Sími:
                    </Text>
                    <TouchableOpacity
                        onPress={() => openLink(`tel:${theater.phone}`)}
                    >
                        <Text style={styles.phoneLink}>{theater.phone}</Text>
                    </TouchableOpacity>
                </>
            )}

            {theater.google_map && (
                <TouchableOpacity onPress={() => openLink(theater.google_map)}>
                    <Text style={styles.googleMapsLink}>
                        Opna í Google Maps
                    </Text>
                </TouchableOpacity>
            )}

            <Text
                style={[globalStyles.defaultTextColor, styles.sectionHeading]}
            >
                Myndir í sýningu:
            </Text>

            {cinemaMovies.length === 0 ? (
                <Text style={globalStyles.defaultTextColor}>
                    Engar myndir fundust fyrir þetta bíó.
                </Text>
            ) : (
                <View style={styles.moviesList}>
                    {cinemaMovies.map((movie) => {
                        const showtime = movie.showtimes.find(
                            (s: any) => s.cinema.id === id
                        );

                        return (
                            <View key={movie._id} style={styles.movieContainer}>
                                <MovieCard
                                    _id={movie._id}
                                    title={movie.title}
                                    poster={movie.poster}
                                    year={movie.year}
                                    genres={movie.genres}
                                    certificateIS={movie.certificateIS}
                                    certificateImg={movie.certificateImg}
                                />
                                {showtime && (
                                    <Showtime
                                        name="Sýningartímar"
                                        schedules={showtime.schedule}
                                    />
                                )}
                            </View>
                        );
                    })}
                </View>
            )}
        </ScrollView>
    );
};

export default CinemaDetails;
