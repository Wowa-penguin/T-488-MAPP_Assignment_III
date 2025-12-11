import Filter from '@/components/filter';
import FilterMenu from '@/components/filterMenu';
import Loading from '@/components/loading';
import MovieCard from '@/components/movieCard';
import { AppDispatch, RootState } from '@/store';
import { fetchMovies } from '@/store/movieSlice';
import { fetchTheaters } from '@/store/theaterSlice';
import globalStyles from '@/styles/globalStyles';
import styles from '@/styles/movies';
import React, { useEffect, useState } from 'react';
import { Modal, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        rating: '',
        actors: '',
        directors: '',
        pg: '',
    });

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

    const [filterModalVisible, setFilterModalVisible] = useState(false);

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

    const handleFilters = (newFilters: {
        rating: string;
        actors: string;
        directors: string;
        pg: string;
    }) => {
        setFilters(newFilters);
    };

    const filterMovies = movies.filter((movie) => {
        const title = movie.title.toLowerCase();
        const altTitle = movie.alternativeTitles?.toLowerCase() ?? '';
        const year = movie.year ?? '';

        return (
            title.includes(search.trim().toLowerCase()) ||
            altTitle.includes(search.trim().toLowerCase()) ||
            year.includes(search.trim().toLowerCase())
        );
    });

    return (
        <ScrollView
            style={[{ flex: 1 }, globalStyles.defaultBackgroundColor]}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <Modal
                visible={filterModalVisible}
                animationType="slide"
                transparent={true}
            >
                <FilterMenu
                    handelCansel={() => setFilterModalVisible(false)}
                    onApply={handleFilters}
                />
            </Modal>
            <View
                style={{
                    marginTop: 20,
                    width: 'auto',
                    height: 100,
                }}
            >
                <Filter
                    value={search}
                    onChange={setSearch}
                    handleClick={() => setFilterModalVisible(true)}
                />
            </View>
            <View style={styles.container}>
                {filterMovies.map((movie) => (
                    <MovieCard
                        key={movie._id}
                        _id={movie._id}
                        title={
                            movie.alternativeTitles.length <
                                movie.title.length && movie.alternativeTitles
                                ? movie.alternativeTitles
                                : movie.title
                        }
                        year={movie.year}
                        poster={movie.poster}
                        genres={movie.genres}
                        certificateIS={movie.certificateIS}
                        certificateImg={movie.certificateImg}
                    />
                ))}
            </View>
        </ScrollView>
    );
}
